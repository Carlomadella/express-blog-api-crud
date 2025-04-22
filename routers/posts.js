const express = require('express');

const posts = express.Router();

// rotta principale (index)
posts.get('/', (req, res) => {
    res.send("Lista dei post");
});

// UTILIZZO I METODI HTTP PER AZIONI SPECIFICHE SULLE RISORSE

// Read: Visualizzo un elemento con id specifico (Show)
posts.get("/:id", (req, res) => {
    req.params.id;
    const id = req.params.id;
    res.send(`Visualizzo il post con id ${id}`);
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