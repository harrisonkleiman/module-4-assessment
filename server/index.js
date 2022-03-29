const express = require("express")
const cors = require("cors")
const { getFortune, getCompliment } = require("./controller/fortuneController")
// const { getStudents } = require("./controller/studentController")

// middleware
const app = express()
app.use(express.json())
app.use(cors())

// endpoints
app.get("/api/fortune", getFortune)
app.get("/api/compliment", getCompliment)

app.listen(4000, () => console.log("Server running on 4000"))



  

