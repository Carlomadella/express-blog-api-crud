const express = require('express')
const app = express()

// importo il router dei post
const postsRouter = require('./routers/posts.js');


const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// utilizzo il router importato precedentemente
app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${3000}`)
});

