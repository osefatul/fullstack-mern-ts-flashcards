const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";


interface TDeck {
    _id:string;
    title: string;
    cards: string[];
}


export const createDeck = async (title:string) =>{
    const response = await fetch(`${API_URL}/decks`, {
        method: "POST",
        body: JSON.stringify({title}),
        headers: {'Content-Type': 'application/json'},
    })
    return response.json()
}



export const getDecks = async (): Promise<TDeck []> => {
    const response = await fetch(`${API_URL}/decks`, {
        method: "GET",
        headers: {'Content-Type': 'application/json'},
    });

    return response.json()
}



export const getADeck = async (deckId:string):Promise<TDeck> => {
    const response = await fetch(`${API_URL}/${deckId}`, {
        method: "GET",
        headers: {'Content-Type': 'application/json'},
    })
    return response.json()
}


export const deleteADeck = async (deckId:string) =>{
    const response = await fetch(`${API_URL}/${deckId}`, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'},
    });
    return response.json()
}


export const createCard = async (deckId: string, text:string): Promise<TDeck> => {
    const response = await fetch(`${API_URL}/cards/${deckId}/cards`, {
        method: 'POST',
        body: JSON.stringify({text}),
        headers: {'Content-Type': 'application/json'},
    })
    return response.json()
}