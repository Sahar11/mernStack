import express from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoutes.js'

const app = express();

// Middleware for parsing request body
app.use(express.json());
// Option 1: Allow All oriigns with Default values of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', "DELETE"],
//     allowedHeaders: ['Content-Type']
//   })
// )

app.get('/', (request, response) => {
  return response.status(234).send("Welcome to MERN Stack Tutorial")
});

app.use('/books', booksRoute);



mongoose
.connect(mongoDBURL)
.then(() => {
  app.listen(PORT, () => console.log(`Server Started at Port ${PORT}!`)); 
})
.catch((error) => {
console.log(error)
})