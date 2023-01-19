import React, { useEffect, useState } from 'react'
import './App.css'
import { createDeck, deleteADeck, getDecks, TDeck } from './api/api'
import { Link } from "react-router-dom";
import Loader from './components/loader/Loader';



function App() {
  const [decks, setDecks] = useState<TDeck []>([])
  const [title, setTitle] = useState("")
  const [loading, setLoading] = useState<boolean>(true);

  const handleCreateDecks = async (e:React.FormEvent) => {
    e.preventDefault()
    try{
      if (!title) return;
      const formDeck = await createDeck(title);
      setDecks([...decks, formDeck]);
      setTitle("")
    }catch(err){
      alert("No title")
    }
  }

  async function handleDeleteDeck(deckId: string) {
    console.log(decks)
    console.log(deckId)
    await deleteADeck(deckId);
    setDecks(decks.filter((deck) => deck._id !== deckId));
  }


  useEffect(() => {
    async function fetchDecks() {
      setLoading(true);
      const decksData= await getDecks()
      console.log(decksData)
      setDecks(decksData)
      setLoading(false);
    }
    fetchDecks()
  },[])


  return (

    <div className="container">

      {
        loading? 
        <div className='loading'>
          <Loader message = "Loading, Please wait" />
        </div>:
          <div className="App">
            <h1>Your Decks</h1>

            <form onSubmit={handleCreateDecks} >
              <div className='formData'>
                <label htmlFor="deck-title">Deck Title</label>
                <input
                required 
                type="text" 
                id='deck-title' 
                value={title}
                onChange= {
                  (e: React.ChangeEvent<HTMLInputElement>) => {
                    setTitle(e.target.value)
                  }}
                  />
              </div>
              <button>Create Deck</button>
            </form>

            <ul className='decks'>
              {
                decks.map(deck =>(
                  <li key={deck._id}>
                    <button onClick={() => handleDeleteDeck(deck._id)}>X</button>
                    <Link className="title" to={`decks/${deck._id}`}>{deck.title}</Link>
                  </li>
                ))
              }
            </ul>
        </div>
      }

    </div>
  )
}

export default App
