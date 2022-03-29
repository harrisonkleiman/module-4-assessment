module.exports = {
  getAffirmation: (req, res) => {
    const affirmations = [
      "You are awesome!",
      "You are smart!",
      "You are a genius!",
    ]

    // choose random affirmation
    let randomIndex = Math.floor(Math.random() * affirmations.length)
    let randomAffirmation = affirmations[randomIndex]

    res.status(200).send(randomAffirmation)
  },
}
