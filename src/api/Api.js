import axios from "axios";

const baseUrl = "http://solid.lol/"

const api = axios.create({
    baseURL: baseUrl
})



api.interceptors.request.use((config) => {
    config.headers = {
        "token": JSON.parse(localStorage.getItem("auth")).token
    }
    return config
})


const Api = {
    createPizza: (data) => api.post("add/pizza", data),
    getAllPizza: () => api.get("getall/pizza"),
    deletePizza: (id) => api.delete("delete/pizza/" + id),
    auth: (data) => api.post("/admin", data)
}

export default Api;