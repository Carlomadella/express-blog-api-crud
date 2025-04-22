const express = require('express');

const posts = express.Router();

const postsList = require('../controllers/postsList.js');

// rotta principale (index)
posts.get('/', (req, res) =>{
    res.json(postsList);
});

// Read: Visualizzo un elemento con id specifico (Show)
posts.get('/:id', (req, res) =>{
    // recupero l'id dall' URL 
    const id = parseInt(req.params.id) //parseInt() serve per trasformare l'id in numero
    // cerco il mio post tramite id
    const myPost = posts.find(myPost => myPost.id === id);
    // creo l'if per fare il controllo
    if(!myPost){
        //Imposto lo status 404 se il post cercato non viene trovato
        res.status(404)
        // Restituisco un JSON con un messaggio di errore
        return res.json({
            error: "Not Found",
            message: "il post cercato non è presente"
        });
    }
    // Restituiamolo sotto forma di JSON
    res.json(myPost);
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