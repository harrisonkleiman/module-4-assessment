const fortuneBtn = document.querySelector("#fortune-btn")

const getFortune = () => {
  axios
    .get("http://localhost:4000/api/fortune")
    .then((res) => alert(res.data))
    .catch((err) => console.log(err))
}

fortuneBtn.addEventListener("click", getFortune)

// const allStudents = () => {
//   axios
//     .get("http://localhost:4000/api/students")
//     .then((res) => {
//       res.data.forEach((s) => {
//         let nameHeading = document.createElement("h3")
//         nameHeading.textContent = s.name
//         document.querySelector("body").appendChild(nameHeading)
//       })
//     })
//     .catch((err) => console.log(err))
// }

// window.addEventListener("DOMContent", allStudents)
// let userInput = document.querySelector("#student-input")
// let submitBtn = document.querySelector("#submit-btn")

// const addNewStudent = (e) => {
//   // get user's input
//   let studentName = userInput.value
//   // make axios call & attach to body and send it
//   axios
//     .post("http://localhost:4000/api/students", { studentName })
//     .then((res) => {
//       console.log(res).catch((err) => console.log(err))
//     })
//     .catch((err) => console.log(err))
// }

// const handleDelete = (e) => {
//   let studentId = e.target.id
//   axios
//     .delete(`http://localhost:4000/api/students/${studentId}`)
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((err) => console.log(err))
// }

const affirmationBtn = document.querySelector("#affirmation-btn")

const getAffirmation = () => {
  axios
    .get("http://localhost:4000/api/affirmation")
    .then((res) => alert(res.data))
    .catch((err) => console.log(err))
}

// add event listener to affirmation button
affirmationBtn.addEventListener("click", getAffirmation)

// // add event listener to student container
// studentContainer.addEventListener("click", handleDelete)

// add event listener to fortune button
fortuneBtn.addEventListener("click", getFortune)
