import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_API_URL } from "./NetworkConfig";

const apiClient = axios.create({
    baseURL: BASE_API_URL,
});

export async function apiRequest<D = any>(
    url: string,
    options?: AxiosRequestConfig<D>
) {
    const onSuccess = (response: AxiosResponse<D>) => {
        return response.data;
    };

    const onFailure = (error: AxiosError<D>) => {
        return Promise.reject(error.response);
    };

    return apiClient.get(url, options).then(onSuccess).catch(onFailure);
}
