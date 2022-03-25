const express = require("express")
const cors = require("cors")

const app = express()

// middleware
app.use(express.json())
app.use(cors())



app.listen(4000, () => console.log("Server running on 4000"));


app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ]

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length)
  let randomCompliment = compliments[randomIndex]

  res.status(200).send(randomCompliment)
})

app.get("/api.fortune", (req, res) => {
  const fortunes = [
    "You will lead a life of joy.",
    "Love is the only way to fulfillment.",
    "Success is the journey, not the destination.",
  ]

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)
})

// Post star wars character jpg
app.post("/api/starwars", (req, res) => {
  const { name } = req.body

  // get jpg from star wars API
  const starWarsChar = `https://starwars-visualguide.com/assets/img/characters/${name}.jpg`

  res.status(200).send(starWarsChar)
})

// Display entered affitmations
app.post("/api/affirmation", (req, res) => {
  const { affirmation } = req.body
  document.getElementById("affirmation").innerHTML = affirmation
  res.status(200).send(affirmation)
})



