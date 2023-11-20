import express from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";


const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  return response.status(234).send("Welcome to MERN Stack Tutorial")
})


mongoose
.connect(mongoDBURL)
.then(() => {
  app.listen(PORT, () => console.log(`Server Started at Port ${PORT}!`)); 
})
.catch((error) => {
console.log(error)
})