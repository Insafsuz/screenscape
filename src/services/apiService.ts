import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = '97d2be50278ec2bd4874a72f82e58b59'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2QyYmU1MDI3OGVjMmJkNDg3NGE3MmY4MmU1OGI1OSIsIm5iZiI6MTcyMjkyNDU5OC40NzI0ODgsInN1YiI6IjY2YjBiMWNmZjJlMTAyYzMxOTNhMzJjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.txD86XSk0yra0ou25QT-FkLD_jW2RNe4vqzw1gVkJxw`,
  },
  params: {
    key: API_KEY,
  },
})

export default instance
