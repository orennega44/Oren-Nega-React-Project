import axios from "axios";

const api = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";


export async function registerUser(newUser) {
    return await axios.post(api, newUser);

}

export async function userLogin(user) {
    return await axios.post(`${api}/login`, user);
}

export async function getUserById(userId, token) {
    return await axios.get(`${api}/${userId}`, {
        headers: {
            "x-auth-token": JSON.parse(token)
        }
    })

}

export async function getAllUsers(token) {
    return await axios.get(api, {
        headers: { "x-auth-token": JSON.parse(token) }
    })

}

export async function updateUser(userId, token, newCard) {
    return await axios.put(`${api}/${userId}`, newCard, {
        headers: {
            "x-auth-token": JSON.parse(token)
        }
    })

}

export async function deleteUser(userId, token) {
    return await axios.delete(`${api}/${userId}`, {
        headers: {
            "x-auth-token": JSON.parse(token)

        }
    },{})
}

export async function updateUsersBusinessStatus(userId,token) {
    return await axios.patch(`${api}/${userId}`, {}, { headers: { "x-auth-token": JSON.parse(token)}})
}



