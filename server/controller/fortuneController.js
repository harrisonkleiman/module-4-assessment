module.exports = {
  getFortune: (req, res) => {
    const fortunes = [
      "your day will be awesome!",
      "some bad luck!",
      "be hopeful,its gonna be ok.",
    ]

    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length)
    let randomFortune = fortunes[randomIndex]

    res.status(200).send(randomFortune)
    alert(randomFortune)
  },
}
