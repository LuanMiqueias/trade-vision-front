import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNTc3ODhhMC02OWNmLTQ1YWUtOWYzYi05M2FjN2FhNjRlODIiLCJpYXQiOjE3MjgxNjkwNDcsImV4cCI6MTcyODc3Mzg0N30.ko9s-COzGwuUXm1ed9q9uL6DXYQZBR5kAMGsO4c7GAU'
  }
})

export default api