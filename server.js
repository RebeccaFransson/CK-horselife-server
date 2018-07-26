const express = require('express')
var path = require('path')

const Database = require('./data/Database.js')
//controllers
var BlogPostController = require("./controllers/BlogPostController");


const app = express()

app.post('/add', (req, res) => {
    console.log("ADD")
    console.log(req)    
    const body = req.body
    console.log(body)
    BlogPostController.addBlogPost()
    res.end()
})

app.get('/all', (req, res) => {
    console.log("get all")
    BlogPostController.getAllBlogPosts()
    .then(function(allPosts){

        console.log(allPosts)
        res.status(200).send(allPosts);
    });
})

app.listen(process.env.PORT || 8080, () => {
    console.log('listening on port 8080')
    // Server is up, connect to DB
    new Database()
})

