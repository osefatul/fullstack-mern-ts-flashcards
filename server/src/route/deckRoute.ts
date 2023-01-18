import express from "express";
const router = express.Router();

import {
    createDeck,
    createCardForDeck,
    deleteADeck,
    getDecks,
    getADeck,
    deleteCardForDeck} from "../controllers/deckControllers"

router.post('/decks', createDeck)
router.get('/decks', getDecks)
router.get('/decks/:deckId', getADeck)
router.delete('/decks/:deckId', deleteADeck)

router.post('/decks/:deckId/cards', createCardForDeck)
router.delete("/decks/:deckId/cards/:index", deleteCardForDeck)


module.exports = router;