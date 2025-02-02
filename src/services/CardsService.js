import axios from "axios";





const api = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"




export async function createCard(newCard, token) {
    return await axios.post(api, newCard, {
        headers: {
            'x-auth-token': JSON.parse(token)
        }
    })

}

export async function getAllCards() {
    return await axios.get(api);
}

export async function getAllMyCards(token) {
    return await axios.get(`${api}/my-cards`, {
        headers: {
            "x-auth-token": JSON.parse(token),
        }
    });
}

export async function getCardsById(cardId) {
    return await axios.get(`${api}/${cardId}`)

}



export async function likeCard(cardId, token) {
    return await axios.patch(`${api}/${cardId}`, {}, {
        headers: {
            "x-auth-token": JSON.parse(token),

        }
    }
    );
}


export async function updateCard(card, token, cardId) {

    return await axios.put(`${api}/${cardId}`, card, {
        headers: {
            "x-auth-token": JSON.parse(token),

        }
    })

}

export async function deleteCard(cardId, bizNumber, token) {
    return await axios.delete(`${api}/${cardId}`,
        {

            headers: {
                "x-auth-token": JSON.parse(token)
            }
        },
        {

            data: { "bizNumber": bizNumber }
        })

}
