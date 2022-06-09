import axios from "axios";

const baseUrl = "http://solid.lol/"
const mockApiBaseUrl = "https://605b21f027f0050017c063b9.mockapi.io/api/v3/";

const api = axios.create({
    baseURL: baseUrl
})



api.interceptors.request.use((config) => {
    config.headers = {
        "token": JSON.parse(localStorage.getItem("auth"))?.token || ""
    }
    return config
})


const Api = {
    createPizza: (data) => api.post("add/pizza", data),
    // TODO: remove after api confirm
    getAllPizzaMock: () => api.get("pizza"),
    getAllPizza: () => api.get("getall/pizza"),
    deletePizza: (id) => api.delete("delete/pizza/" + id),
    auth: (data) => api.post("/admin", data)
}

export default Api;