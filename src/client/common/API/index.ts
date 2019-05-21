import axios from 'axios'

const PORT = process.env.PORT
const URL = process.env.URL + (PORT ? `:${PORT}` : '')

interface AuthResponse {
  user: string
}

export const auth = (payload: any) => {
  return axios.post<AuthResponse>(`${URL}/auth`, payload)
}
