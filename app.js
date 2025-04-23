const express = require('express')

// inizializzo express nella variabile app
const app = express()

// inizializzo il numero di porta in cui voglio che il server ascolti
const port = 3000

// importo il router dei post
const postsRouter = require('./routers/posts.js');

// utilizzo il router importato precedentemente
app.use('/posts', postsRouter)

// definisco la rotta base per la mia applicazione
app.get('/', (req, res) => {
    res.send('Homepage')
});

// indichiamo al server di rimanere in ascolto sulla porta 3000 impostata precedentemente
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${3000}`)
});

