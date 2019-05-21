import axios, { AxiosPromise } from 'axios'

const URL = process.env.URL

interface AuthResponse {
  id: string
}

export const auth = (payload: any) => {
  return axios.post<AuthResponse>(`${URL}/auth`, payload)
}

export type AuthPromise = AxiosPromise<AuthResponse>
