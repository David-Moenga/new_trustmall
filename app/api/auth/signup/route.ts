import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, SESSION_TTL_SECONDS, signup } from "@/lib/auth";

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

  const fullName = typeof body.fullName === "string" ? body.fullName : "";
  const email = typeof body.email === "string" ? body.email : "";
  const password = typeof body.password === "string" ? body.password : "";
  const terms = body.terms === true;

  if (fullName.trim().length < 2) {
    return jsonError("Please enter your full name.", 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return jsonError("Please enter a valid email address.", 400);
  }

  if (password.length < 8) {
    return jsonError("Password must be at least 8 characters long.", 400);
  }

  if (!terms) {
    return jsonError(
      "You must agree to the Terms of Service and Privacy Policy to create an account.",
      400
    );
  }

  const result = await signup({ fullName, email, password });
  if (!result.ok) {
    return jsonError(result.error, result.status);
  }

  const response = NextResponse.json({ user: result.user }, { status: 201 });
  response.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: result.token,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}
