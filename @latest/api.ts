import axios from 'axios'
import type { DogPost } from './src/components/types/Post'
const API_KEY = 'live_nq1bFYpzQtST65hxusiK5PIsZBz7r4XQvMUrQRyKptCNmHHVQHsQpJGOlqE8W1Jr'

const api = axios.create({
  baseURL: 'https://api.thedogapi.com/v1',
  headers: { 'x-api-key': API_KEY },
})

export const fetchPosts = async (limit = 10): Promise<DogPost[]> => {
  const { data } = await api.get<DogPost[]>('/images/search', { params: { limit } })
  return data
}