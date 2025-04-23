const postsList = require('../data/posts.js');


// creiamo i metodi per le rotte

// index
const index = (req, res) => {
    res.send("Tutti i post");
}

// show
const show = (req, res) => {
    res.send(`Post con id ${req.params.id}`);
}

// store
const store = (req, res) => {
    res.send("Inserimento di un nuovo post");
}

// update
const update = (req, res) => {
    res.send(`Modifica totale del post con id ${req.params.id}`);
}

// modify
const modify = (req, res) => {
    res.send(`Modifica parziale del post con id ${req.params.id}`);
}

// destroy
const destroy = (req,res) => {
    res.send(`Cancellazione del post con id ${req.params.id}`)
}

// esportiamo i metodi creati tramite la destrutturazione
module.exports = { index, show, store, update, modify, destroy };