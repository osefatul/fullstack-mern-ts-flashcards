import { Request, Response } from "express";
import DeckSchema from "../models/deck";



export const createDeck = async (req:Request, res:Response) =>{
    const deck = new DeckSchema ({...req.body})
    try{
        const createdDeck = await deck.save();
        res.status(200).json(createdDeck);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

export const getDecks = async (req:Request, res:Response) =>{
    try{
        const decks = await DeckSchema.find();
        res.status(200).json(decks);
    }catch(err){
        console.log(err);
    }
}


export const getADeck = async (req:Request, res:Response) =>{
    const deckId = req.params.deckId;
    try{
        const deck = await DeckSchema.findById(deckId);
        res.status(200).json(deck);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}


export const deleteADeck = async (req:Request, res:Response) => {
    const deckId = req.params.deckId;
    try{
        await DeckSchema.findByIdAndDelete(deckId);
        res.status(200).send("Deck is deleted");
    }catch(err){
        console.log(err)
        res.status(400).json("Something went wrong");
    }
}

export const createCardForDeck = async (req:Request, res:Response) =>{
    const deckId = req.params.deckId;

    const deck = await DeckSchema.findById(deckId);
    if (!deck) return res.status(400).send("no deck of this id exists");

    const { text } = req.body;
    deck.cards.push(text);
    await deck.save();
    res.json(deck);
}


export const deleteCardForDeck = async (req:Request, res:Response)=>{
    const deckId = req.params.deckId;
    const index = req.params.index;

    const deck = await DeckSchema.findById(deckId);
    if(!deck) return res.status(400).send("no deck of of this id exists");

    deck.cards.splice(parseInt(index), 1);
    await deck.save();
    res.status(200).json(deck)
}






