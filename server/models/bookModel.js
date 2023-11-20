import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  { // object 1 
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishYear: {
    type: Number,
    required: true
  },
   
},
{  // object 2
  timestamps: true
}
)

export const Book = mongoose.model('Book', bookSchema)