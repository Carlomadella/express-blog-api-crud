// creo la funzione che risponde all'utente quando una pagina non è presente nella nostra app
function notFound(req,res,next){
    res.status(404);
    res.json({
        error: "Not Found",
        messagge: "La pagina che stai cercando non è presente"
    })
}

// esporto la funzione
module.exports = notFound;