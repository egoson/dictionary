import axios from '@/api/axios'

const getWords = (apiUrl) => {
  return axios.get(apiUrl)
}

export default {
  getWords
}
