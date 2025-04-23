const express = require('express');

const router = express.Router();

// importo il controller
const postController = require("../controllers/postController.js")

// rotta principale (index)
router.get("/", postController.index);

// Read: Visualizzo un elemento con id specifico (Show)
router.get('/:id', postController.show);

// Create: Creare un nuovo elemento (store)
router.post("/", postController.store);

// Update: Modificare interamente un elemento (update)
router.put("/:id", postController.update);

// Update: modificare parzialmente un elemento (modify)
router.patch("/:id", postController.modify);

// Delete: Eliminare un elemento (destroy)
router.delete("/id", postController.destroy);

// Esporto il router 
module.exports = posts;