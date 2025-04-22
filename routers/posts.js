const express = require('express');

const posts = express.Router();

const postsList = require('../controllers/postsList.js');

// rotta principale (index)
posts.get('/', (req, res) =>{
    res.json(postsList);
});

// Create: Creare un nuovo elemento (store)
posts.post("/", (req , res) =>{
    res.send("Creo un nuovo post");
});

// Update: Modificare interamente un elemento (update)
posts.put("/:id", (req, res) => {
    res.send(`Modifico completamente il post con id ${req.params.id}`);
});

// Update: modificare parzialmente un elemento (modify)
posts.patch("/:id", (req,res) =>{
    res.send(`Modifico parzialmente il post con id ${req.params.id}`);
});

// Delete: Eliminare un elemento (destroy)
posts.delete("/id", (req,res) =>{
    res.send(`Elimino il post con id ${req.params.id}`);
});


// Esporto il router 
module.exports = posts;