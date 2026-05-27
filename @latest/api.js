import axios from "axios";

const API_KEY = "live_nq1bFYpzQtST65hxusiK5PIsZBz7r4XQvMUrQRyKptCNmHHVQHsQpJGOlqE8W1Jr"; // reemplazá con tu API key de OMDb

const api = axios.create({
  baseURL: "https://api.thedogapi.com/v1",
  params: { apikey: API_KEY },
});

export default api;