import React, {useState, useEffect} from 'react'
import { createCard, deleteACard, getADeck, TDeck } from '../../api/api'
import "./deck.css"
import { useParams } from "react-router-dom";
import Loader from '../loader/Loader';



function Deck() {
    const [loading, setLoading] = useState<boolean>(true);
    const [deck, setDeck] = useState<TDeck | undefined>();
    const [cards, setCards] = useState<string[]>([]);
    const [text, setText] = useState("");
    const {deckId} = useParams()


    const handleDeleteCard = async (index: number) => {
        if(!deckId) return;
        const newDeck = await deleteACard(deckId, index);
        setCards(newDeck.cards)
    }


    async function handleCreateDeck(e: React.FormEvent) {
        e.preventDefault();
        const { cards: serverCards } = await createCard(deckId!, text);
        setCards(serverCards);
        setText("");
    }


    useEffect(() => {
        async function fetchDeck() {
            if (!deckId) return;
            const newDeck = await getADeck(deckId);
            setDeck(newDeck);
            setCards(newDeck.cards);
            setLoading(false)
        }
        fetchDeck();
    }, [deckId]);

    return (
        <>
        {loading?
        <div className='loading'>
            <Loader message='Loading, Please wait'/>
        </div>:
        <div className="Deck">
            <h1>{deck?.title}</h1>
            <form onSubmit={handleCreateDeck}>
            <label htmlFor="card-text">Card Text</label>
            <input
                id="card-text"
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setText(e.target.value);
                }}
            />
            <button>Create Card</button>
            </form>

            <ul className="cards">
                {cards.map((card, index) => (
                    <li key={index} className="card">
                        <button onClick={() => handleDeleteCard(index)}>X</button>
                        <div className='cardText'>
                            {card}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        }
        </>
    
    );
}

export default Deck