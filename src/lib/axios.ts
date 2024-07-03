import axios from "axios";

export const api = axios.create({
  baseURL: "https://server-bice-chi.vercel.app/",
});
