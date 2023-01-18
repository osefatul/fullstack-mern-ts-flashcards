import mongoose, { InferSchemaType, model } from "mongoose";
const Schema = mongoose.Schema;


const DeckSchema = new Schema ({
    title: String,
    cards:[String]
})


type Deck = InferSchemaType<typeof DeckSchema>
export default model<Deck>("Deck", DeckSchema)