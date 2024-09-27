const express = require('express');
const app = express();
const SERVER_PORT = process.env.port || 3000

//http://localhost:3000/
application.get('/', (req, res)=>{
    res.send('Hello world');
})

app. post('/',(req, res)=>{
    res.send('POST - Hello world');
})

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`)
})

