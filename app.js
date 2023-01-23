const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const https = require("https")

const instrument = {
    instruments:
        [
            {
                "name": "guittar", "kind": "string instrument"
            },
            {
                "name": "Pinao", "kind": "string instrument"
            },
            {
                "name": "Violin", "kind": "String"
            }
        ]
}

app.get("/joke", (req, res) => {
    const url = "https://api.chucknorris.io/jokes/random"
    https.get(url, (response) => {
        response.on('data', (data) => {
            res.send(JSON.parse(data))
        })
    }).on("error", (err) => {
        console.log("there was an error" + err.message)
    })
})

app.get("/instruments", (req, res) => {
    res.send(instrument)
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})



app.listen(PORT, () => {
    console.log("listening to " + PORT)
})