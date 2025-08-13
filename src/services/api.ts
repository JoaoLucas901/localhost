import axios from "axios";

export function setupApiClient() {
   const api = axios.create({
    baseURL: ''
   });

   return api;
}
