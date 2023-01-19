"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const deckControllers_1 = require("../controllers/deckControllers");
router.post('/decks', deckControllers_1.createDeck);
router.get('/decks', deckControllers_1.getDecks);
router.get('/decks/:deckId', deckControllers_1.getADeck);
router.delete('/decks/:deckId', deckControllers_1.deleteADeck);
router.post('/decks/:deckId/cards', deckControllers_1.createCardForDeck);
router.delete("/decks/:deckId/cards/:index", deckControllers_1.deleteCardForDeck);
module.exports = router;
