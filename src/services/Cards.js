import axios from "axios";

const api = "https://card-server-27am.onrender.com/cards"

export  async function getAllCards(){
    return axios.get(api);
}