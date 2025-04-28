function errorsHandler(err, req, res, next){
    // inseriamo il codice di errore 500 per indicare un errore interno del server
    res.status(500);

    // restituiamo un oggetto json con il messaggio di errore
    res.json({
        error: err.message
    })
}

module.exports = errorsHandler;