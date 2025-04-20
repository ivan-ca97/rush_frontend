import { NextRequest, NextResponse } from 'next/server';

import { post } from "@/utils/api"

import { LoginResponse, LoginRequest } from "@/types/authentication"

const tokenExpirationDays = Number(process.env.NEXT_PUBLIC_TOKEN_EXPIRATION_DAYS);

const POST = async (request: NextRequest) => {
  const body = (await request.json()) as LoginRequest;

  const backendResponse = await post<LoginResponse>("/authentication/login", body, false);

  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: 'token',
    value: backendResponse.token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * tokenExpirationDays,
  });

  return response;
}

export default POST