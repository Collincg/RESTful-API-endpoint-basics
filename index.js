// 'npm init -y' in terminal to start a new node project. Will create a package .json
// install express with 'npm install express'
// 

// import express (funtion so add ())
const express = require('express');
const app = express();
const PORT = 8080; 

app.use(express.json())

// to fire up API on server you call app.listen()
// this tells it to listen on a specific port (8080)

app.listen(
    PORT,
    // callback to let us know when the API is ready
    () => console.log(`it's alive on http://localhost:${PORT}`)

) // run with "node ." in terminal. Do this to SAVE FILE also

// app.listen(
//     PORT
// )

//'/tshirt' is Route. 
// these are ENDPOINTS
app.get('/tshirt', (req, res) => { // Handler, ()=> run this function when the route is requested
    res.status(200).send({
        tshirt: 'red with stripes',
        size: 'large'
    })
})

// second enpoint
// route params with 'id': capture dynamic values in URL
app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo){
        res.status(418).send({message: "We need a logo!"})
    }

    res.send({
        tshirt: `👚 with your ${logo} and ID of ${id}`,
    })
}); 

// RESTful API from scratch with node.js and Insomnia
