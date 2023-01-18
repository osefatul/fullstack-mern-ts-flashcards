import { config } from "dotenv";
config();

import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";

const deckRoute = require("./route/deckRoute")



app.use(cors({origin: "*",}));
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/v1/api", deckRoute);



mongoose.set('strictQuery', true);
console.log("Connected to MongoDB")
mongoose.connect(process.env.MONGO_URL!).then(
).catch(err => console.error(err));




app.listen(PORT, ()=>{
    console.log("Service listening on port", PORT)
});