const express = require("express")
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient

const APP = express()

APP.set('view engine', 'ejs')

APP.use(bodyParser.urlencoded({ extended: true }))
APP.use(bodyParser.json())

APP.use(express.static("public"))

MongoClient.connect("mongodb+srv://Heroku:ajMWXi7NVddjcB8j@resumewebsitedetails.hldsi5v.mongodb.net/test?retryWrites=true&w=majority", (err, client) => {
    if (err) return console.error(err)
    console.log("connected to database")

    const db = client.db("cutename")

    // COLLECTIONS
    const messageCollection = db.collection('messages')

    // FUNCTIONS
    APP.listen(5000, function() {
        console.log("listening on 5000")
    })
    
    APP.get("/", (req, res) => {
        db.collection('messages').find().toArray()
            .then(results => {
                console.log(results)
                res.render("index.ejs", { messages: results })
            })
            .catch(error => console.error(error))
    })

    APP.put('/updateMessage', (req, res) => {
        console.log(req.body.username)
        messageCollection.findOneAndUpdate(
            { username: req.body.username },
            {
              $set: {
                username: req.body.username,
                message: req.body.message
              }
            },
            {
              upsert: true
            }
          )
            .then(result => {console.log(result)})
            .catch(error => console.error(error))
    })
    
    APP.post("/createUser", (req, res) => {
        messageCollection.insertOne(req.body)
            .then(result => {
                console.log(req.body)
                res.redirect("/")
            })
            .catch(error => console.error(error))
    })
    
})




