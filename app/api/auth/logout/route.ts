import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, destroySession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const cookieStore = request.cookies;
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  if (token) {
    await destroySession(token);
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}
