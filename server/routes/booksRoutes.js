import express from 'express';

const router = express.Router();

// Route for saving a new book to database base

router.post('/books', async (request, response) => {
  try{
   if (
    !request.body.title ||
    !request.body.author ||
    !request.body.publishYear
   ) {
    return response.status(400).send({
      message: 'Send all required fields: title, author, publishYear',
    });
   }
   const newBook = {
    title: request.body.title,
    author: request.body.author,
    publishYear: request.body.publishYear,
   };

   const book = await Book.create(newBook);
   return response.status(201).send(book);
  }catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message })
  }
});

// Route for getting list of books inn the database
router.get('/books', async (request, response) => {
  try{
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books
    })
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
})

// Route for getting specific book from the database by id

router.get('/books/:id', async (request, response) => {
  try{
    const { id } = request.params;
    const book = await Book.findById(id);

    return response.status(200).json({book});
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
})

// Route to update a book

router.put('/:id', async (request, response) => {
  try{
      if (
       !request.body.title ||
       !request.body.author ||
       !request.body.publishYear
      ) {
       return response.status(400).send({
         message: 'Send all required fields: title, author, publishYear',
       });
      }
    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);
    
    if(!result) {
      return response.status(404).json({ message: 'Book not found' })
    }
    return response.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for deleting a book
// Route for getting specific book from the database by id

router.delete('/books/:id', async (request, response) => {
  try{
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);
    if(!result) {
      return response.status(404).json({ message: 'Book not found' })
    }
    return response.status(200).send({ message: "Book deleted successfully" });

    return response.status(200).json({book});
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
})