import axios from 'axios'

const URL = process.env.URL

interface AuthResponse {
  user: string
}

export const auth = (payload: any) => {
  return axios.post<AuthResponse>(`${URL}/auth`, payload)
}
