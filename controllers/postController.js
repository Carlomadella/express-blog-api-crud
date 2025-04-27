const postsList = require('../data/postsList.js');


// creiamo i metodi per le rotte

// index
const index = (req, res) => {
    res.json(postsList);
}

// show
const show = (req, res) => {
    // recupero l'id del post da visualizzare
    const id = parseInt(req.params.id);

    // cerco il post con l'id specificato
    const post = postsList.find((post) => {
        return post.id == id;
    });

    // forma contratta per la ricerca del post
    // const post = postsList.find(post => post.id === id);
    // res.send(`Post con id ${req.params.id}`);

    res.json(post);
}

// store
const store = (req, res) => {
    const newId = postsList[postsList.length - 1].id + 1;
    // Creiamo un nuovo Post in forma oggetto 
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    // Aggiungiamo il nuovo post all'array esistente
    postsList.push(newPost);
    
    // controlliamo la lista dei post
    console.log(postsList);

    // Restituiamo lo status corretto e l'oggetto appena creato
    res.status(201);
    res.json(newPost);
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
    // recupero il valore passato cpme parametro
    const id = parseInt(req.params.id);

    const post = postsList.find((post) => {
        return post.id == id;
    });

    if (!post){
        res.status(404);

        res.json({
            error: "Not Found",
            messagge: "Pizza non trovata"
        })
    }

    // rimuovo il post dalla lista
    postsList.splice(postsList.indexOf(post), 1);

    res.sendStatus(204);

    console.log(postsList);
}

// esportiamo i metodi creati tramite la destrutturazione
module.exports = {index, show, store, update, modify, destroy};