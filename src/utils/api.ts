const baseURL = process.env.NEXT_PUBLIC_API_URL;


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
): Promise<T> => {
  const isFormData = data instanceof FormData;

  const client = getClient(headers, isFormData);

  const requestOptions: RequestInit = {
    method,
    headers: new Headers(client.headers),
    mode: "cors",
    cache: "no-cache",
  };

  if (method !== "GET") {
    requestOptions.body = isFormData ? data : JSON.stringify(data);
  }

  const url = `${baseURL}${endpoint}`;
  return fetch(url, requestOptions)
    .then(parseResponse)
    .catch((error) => Promise.reject(error));
};

export const get = async <T>(
  endpoint: string,
  headers?: HeadersInit,
): Promise<T> => {
  return request("GET", endpoint, undefined, headers);
};

export const post = async <T>(
  endpoint: string,
  data: object = {},
  headers?: HeadersInit,
): Promise<T> => {
  return request("POST", endpoint, data, headers);
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