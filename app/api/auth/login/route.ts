import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, SESSION_TTL_SECONDS, login } from "@/lib/auth";

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonError("Invalid request body.", 400);
  }

  const email = typeof body.email === "string" ? body.email : "";
  const password = typeof body.password === "string" ? body.password : "";
  const rememberMe = body.rememberMe === true;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return jsonError("Please enter a valid email address.", 400);
  }

  if (typeof password !== "string" || password.length === 0) {
    return jsonError("Please enter your password.", 400);
  }

  const result = await login({ email, password });
  if (!result.ok) {
    return jsonError(result.error, result.status);
  }

  const response = NextResponse.json({ user: result.user });
  const cookie: {
    name: string;
    value: string;
    httpOnly: boolean;
    sameSite: "lax";
    path: string;
    secure: boolean;
    maxAge?: number;
  } = {
    name: AUTH_COOKIE_NAME,
    value: result.token,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
  };
  if (rememberMe) {
    cookie.maxAge = SESSION_TTL_SECONDS;
  }
  response.cookies.set(cookie);

  return response;
}
