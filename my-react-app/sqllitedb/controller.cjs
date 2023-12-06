// bookshelf-app/server/controllers/books-controller.js

// Import database
const knex = require('./db.cjs')

// Retrieve all books
exports.ordersAll = async (req, res) => {
  // Get all books from database
  knex
    .select('*') // select all records
    .from('orders') // from 'books' table
    .then(userData => {
      // Send books extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving orders: ${err}` })
    })
}

// Create new book
exports.ordersCreate = async (req, res) => {
  // Add new book to database
  knex('orders')
    .insert({ // insert new record, a book
      'customerid': req.body.customerid,
      'phone': req.body.phone,
      'email': req.body.email,
      'food': req.body.food
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Order \'${req.body.customerid}\' by ${req.body.food} created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.customerid} book: ${err}` })
    })
}

// Remove specific book
exports.ordersDelete = async (req, res) => {
  // Find specific book in the database and remove it
  knex('orders')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Order ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} order: ${err}` })
    })
}

// Remove all books on the list
exports.ordersReset = async (req, res) => {
  // Remove all books from database
  knex
    .select('*') // select all records
    .from('orders') // from 'books' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Order list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting order list: ${err}.` })
    })
}