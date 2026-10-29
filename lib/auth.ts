import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";

export const AUTH_COOKIE_NAME = "trustmall_session";
export const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

export interface PublicUser {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
}

interface StoredUser extends PublicUser {
  passwordHash: string;
  salt: string;
}

interface SessionRecord {
  userId: string;
  email: string;
  expiresAt: number;
}

type AuthResult =
  | { ok: true; user: PublicUser; token: string }
  | { ok: false; status: number; error: string };

const users = new Map<string, StoredUser>();
const sessions = new Map<string, SessionRecord>();

function hashPassword(password: string, salt: string): string {
  return scryptSync(password, salt, 64).toString("hex");
}

function verifyPassword(password: string, salt: string, expectedHash: string): boolean {
  const actual = scryptSync(password, salt, 64);
  const expected = Buffer.from(expectedHash, "hex");
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

function toPublicUser(user: StoredUser): PublicUser {
  const { passwordHash: _passwordHash, salt: _salt, ...publicUser } = user;
  return publicUser;
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

async function startSessionForUser(user: StoredUser): Promise<string> {
  const token = randomBytes(32).toString("hex");
  sessions.set(token, {
    userId: user.id,
    email: user.email,
    expiresAt: Date.now() + SESSION_TTL_SECONDS * 1000,
  });
  return token;
}

export async function signup(input: {
  fullName: string;
  email: string;
  password: string;
}): Promise<AuthResult> {
  const email = normalizeEmail(input.email);

  const existingUser = users.get(email);
  if (existingUser) {
    return {
      ok: false,
      status: 409,
      error: "An account with this email already exists. Please sign in instead.",
    };
  }

  const salt = randomBytes(16).toString("hex");
  const user: StoredUser = {
    id: randomBytes(8).toString("hex"),
    fullName: input.fullName.trim(),
    email,
    passwordHash: hashPassword(input.password, salt),
    salt,
    createdAt: new Date().toISOString(),
  };
  users.set(email, user);

  const token = await startSessionForUser(user);
  return { ok: true, user: toPublicUser(user), token };
}

export async function login(input: {
  email: string;
  password: string;
}): Promise<AuthResult> {
  const email = normalizeEmail(input.email);
  const user = users.get(email);

  if (!user) {
    return { ok: false, status: 401, error: "Invalid email or password." };
  }

  const isValid = verifyPassword(input.password, user.salt, user.passwordHash);
  if (!isValid) {
    return { ok: false, status: 401, error: "Invalid email or password." };
  }

  const token = await startSessionForUser(user);
  return { ok: true, user: toPublicUser(user), token };
}

export async function getSession(token: string): Promise<PublicUser | null> {
  const session = sessions.get(token);
  if (!session) {
    return null;
  }

  if (session.expiresAt < Date.now()) {
    sessions.delete(token);
    return null;
  }

  const user = users.get(session.email);
  if (!user) {
    return null;
  }

  return toPublicUser(user);
}

export async function getSessionUserFromRequest(
  request: NextRequest
): Promise<PublicUser | null> {
  const cookieStore = request.cookies;
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  if (!token) {
    return null;
  }
  return getSession(token);
}

export async function destroySession(token: string): Promise<void> {
  sessions.delete(token);
}
