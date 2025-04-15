export const getAuthenticationTokenFromCookies = async (): Promise<string | undefined> => {
  const { cookies } = await import("next/headers")

  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  return token
};