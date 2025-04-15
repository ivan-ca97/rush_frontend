import { post } from "@/utils/api"

import { LoginResponse, LoginRequest } from "@/types/authentication"

const tokenExpirationDays = Number(process.env.NEXT_PUBLIC_TOKEN_EXPIRATION_DAYS);

export const login = async (requestBody: LoginRequest) => {
    try {
        // Login is handled via Next.js API routes.
        const response = await post<LoginResponse>("api/login", requestBody, false, true);
        return response
    } catch (error) {
        throw new Error(error as string)
    }
}