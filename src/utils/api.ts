import { getAuthenticationTokenFromCookies } from './server_side';
import Raw from '@/types/raw_type';

const backendUrl = process.env.NEXT_PUBLIC_API_URL;


const getClient = (headers = {}, noDefault?: boolean) => {
  if (noDefault) return { headers };

  return {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };
};

const parseResponse = async (response: Response) => {
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    const data = await response.json();
    if (!response.ok) {
      const error = {
        message: data.message || "Server error",
      };
      return Promise.reject(error);
    }
    return data;
  } else {
    if (!response.ok) {
      const error = {
        message: "Server error",
      };
      return Promise.reject(error);
    }
    return response.text();
  }
};

const request = async <T>(
  method: string,
  endpoint: string,
  data: object = {},
  headers: HeadersInit = {},
  useAuth: boolean = true,
  nextApiRoute: boolean = false,
  parser?: (raw: Raw<T>) => T,
): Promise<T> => {
  const isFormData = data instanceof FormData;

  const client = getClient(headers, isFormData);

  const requestHeaders = new Headers({
    ...client.headers,
  })

  const isServer = typeof window === 'undefined'
  if (useAuth && isServer) {
    const token = await getAuthenticationTokenFromCookies()

    if (token) {
      requestHeaders.set("Authorization", `Bearer ${token}`);
    }
  }

  const requestOptions: RequestInit = {
    method,
    headers: requestHeaders,
    mode: "cors",
    cache: "no-cache",
    credentials: 'include',
  };

  if (method !== "GET") {
    requestOptions.body = isFormData ? data : JSON.stringify(data);
  }

  const baseUrl = nextApiRoute ? "/" : backendUrl;
  const url = `${baseUrl}${endpoint}`;

  const raw = await fetch(url, requestOptions)
    .then(parseResponse)
    .catch((error) => Promise.reject(error));

  if (!parser) return raw;

  return parser ? parser(raw as Raw<T>) : raw as T;
};

export const get = async <T>(
  endpoint: string,
  parameters?: URLSearchParams,
  useAuth: boolean = true,
  nextApiRoute: boolean = false,
  headers?: HeadersInit,
  parser?: (raw: Raw<T>) => T,
): Promise<T> => {
  const url = parameters ? `${endpoint}?${parameters.toString()}` : endpoint;
  return request("GET", url, undefined, headers, useAuth, nextApiRoute, parser);
};

export const post = async <T>(
  endpoint: string,
  data: object = {},
  useAuth: boolean = true,
  nextApiRoute: boolean = false,
  headers?: HeadersInit,
): Promise<T> => {
  return request("POST", endpoint, data, headers, useAuth, nextApiRoute);
};

export const put = async <T>(
  endpoint: string,
  data: object = {},
  headers?: HeadersInit,
): Promise<T> => {
  return request("PUT", endpoint, data, headers);
};

export const patch = async <T>(
  endpoint: string,
  data: object = {},
  headers?: HeadersInit,
): Promise<T> => {
  return request("PATCH", endpoint, data, headers);
};

export const del = async <T>(
  endpoint: string,
  data: object = {},
  headers?: HeadersInit,
): Promise<T> => {
  return request("DELETE", endpoint, data, headers);
};