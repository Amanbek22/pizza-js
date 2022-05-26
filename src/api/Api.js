import axios from "axios";

const baseUrl = "https://626d32c850a310b8a34bdca8.mockapi.io/"

export const api = axios.create({
    baseURL: baseUrl
})