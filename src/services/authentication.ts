import { post } from "@/utils/api"

import { LoginResponse, LoginRequest } from "@/types/authentication"

export const login = async (requestBody: LoginRequest) => {
    try {
        const response = await post<LoginResponse>("/authentication/login", requestBody);

        localStorage.setItem("token", response.token)
        return response
    } catch (error) {
        throw new Error(error as string)
    }
}