//importing express package
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//creating express server
const server = express();

//request handlers
const loginRequestHandler = (req,res) => {
    /* let body = '';
    req.on('data', chunk => {
        body += chunk;
    })

    req.on('end', () => {
        console.log(body);
    })
 */
    console.log(req.body);
    console.log(req.body.email);
    console.log(req.body.password);
    res.send('Done');
}

//middleware definitions
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.urlencoded({extended: true }));
//server.use(express.json());

//routes
server.post('/login', loginRequestHandler)

//starting express server
server.listen(3000, () => console.log('server is up and running'));