import axios from "axios";

const baseUrl = "http://solid.lol/"

const api = axios.create({
    baseURL: baseUrl
})

const Api = {
    createPizza: (data) => api.post("add/pizza", data),
    getAllPizza: () => api.get("getall/pizza"),
    deletePizza: (id) => api.delete("delete/pizza/" + id),
    auth: (data) => api.post("/admin", data)
}

export default Api;