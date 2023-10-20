import axios from "axios";

export const apiStagingClient = axios.create({
  baseURL: "https://api.staging.myautochek.com/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiProdClient = axios.create({
  baseURL: "https://api-prod.autochek.africa/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
