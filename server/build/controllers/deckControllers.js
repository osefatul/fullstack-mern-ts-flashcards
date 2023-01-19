"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCardForDeck = exports.createCardForDeck = exports.deleteADeck = exports.getADeck = exports.getDecks = exports.createDeck = void 0;
const deck_1 = __importDefault(require("../models/deck"));
const createDeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.body.title;
    const deck = new deck_1.default({ title });
    try {
        const createdDeck = yield deck.save();
        res.status(200).json(createdDeck);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
exports.createDeck = createDeck;
const getDecks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decks = yield deck_1.default.find();
        res.status(200).json(decks);
    }
    catch (err) {
        console.log(err);
    }
});
exports.getDecks = getDecks;
const getADeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deckId = req.params.deckId;
    try {
        const deck = yield deck_1.default.findById(deckId);
        res.status(200).json(deck);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
exports.getADeck = getADeck;
const deleteADeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deckId = req.params.deckId;
    try {
        yield deck_1.default.findByIdAndDelete(deckId);
        res.status(200).json("Deck is deleted");
    }
    catch (err) {
        console.log(err);
        res.status(400).json("Something went wrong");
    }
});
exports.deleteADeck = deleteADeck;
const createCardForDeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deckId = req.params.deckId;
    const deck = yield deck_1.default.findById(deckId);
    if (!deck)
        return res.status(400).send("no deck of this id exists");
    const { text } = req.body;
    deck.cards.push(text);
    yield deck.save();
    res.json(deck);
});
exports.createCardForDeck = createCardForDeck;
const deleteCardForDeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deckId = req.params.deckId;
    const index = req.params.index;
    const deck = yield deck_1.default.findById(deckId);
    if (!deck)
        return res.status(400).send("no deck of of this id exists");
    deck.cards.splice(parseInt(index), 1);
    yield deck.save();
    res.status(200).json(deck);
});
exports.deleteCardForDeck = deleteCardForDeck;
