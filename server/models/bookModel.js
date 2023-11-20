import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: {
    type: toString,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publishYear: {
    type: Number,
    required: true
  }
   
})

export const Book = mongoose.model('Cat', { name: String })