import axios from "axios";

const api = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"

export  async function getAllCards(){
    return axios.get(api);
}