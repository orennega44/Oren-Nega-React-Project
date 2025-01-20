import axios from "axios";

const api = "https://localhost:8000/cards"

export  async function getAllCards(){
    return axios.get(api);
}