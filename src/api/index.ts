import axios, { CancelToken } from "axios";

export interface ResponseGenerator<T extends object> {
  config?: any;
  data?: T;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export interface IDetectTextApi {
  result?: string;
}

const request = axios.create({ baseURL: `/api` });
console.log(request.defaults.baseURL);
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);

export const getHello = (cancelToken?: CancelToken) => {
  return request.get("");
};

export const detectTextApi = (
  body: { image: File },
  cancelToken?: CancelToken
) => {
  const formData = new FormData();
  formData.append("image", body.image);
  return request.post<IDetectTextApi>("/detect-text", formData);
};
