import axios, { AxiosPromise } from 'axios'

const URL = process.env.URL

interface AuthResponse {
  id: string
}

export const auth = (token: string) => {
  return axios.post<AuthResponse>(`${URL}/auth`, { token })
}

export type AuthPromise = AxiosPromise<AuthResponse>
