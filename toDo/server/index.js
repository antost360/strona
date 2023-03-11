const express = require("express")
const app = express()
const cors = require("cors")
const port = 3000
app.use(cors())
app.get("/", (req, res) => {
  res.send("ok")
})

var tasks = []

app.get("/tasks", (req, res) => {})

app.get("/getToDos", (req, res) => {
  res.json(tasks)
})

app.get("/addToDo/:name/:dni/:selectedValue", (req, res) => {
  const name = req.params.name
  const dni = req.params.dni
  const importance = req.params.selectedValue

  const tempTask = { name: name, daysLeft: dni, done: "do zrobienia :/", important: importance }

  if (importance == "true") {
    tasks.unshift(tempTask)
  } else {
    tasks.push(tempTask)
  }
  res.send("add to do")
})

app.get("/addTrue/:name/:dni/:status/:important", (req, res) => {
  const name = req.params.name
  const dni = req.params.dni
  const importance = req.params.dni

  const result = tasks.find((item) => item.name === name)
  const index = tasks.indexOf(result)

  tasks[index].done = "zrobione :D"

  res.send("add true")
})

app.get("/addFalse/:name/:dni/:status/:important", (req, res) => {
  const name = req.params.name
  const dni = req.params.dni
  const importance = req.params.dni

  const result = tasks.find((item) => item.name === name)
  const index = tasks.indexOf(result)

  tasks[index].done = "do zrobienia :/"

  res.send("add true")
})

app.get("/single_remover/:name", (req, res) => {
  const name = req.params.name
  console.log("remover")
  const result = tasks.find((item) => item.name === name)
  const index = tasks.indexOf(result)
  tasks.splice(index, 1)
  res.send("remover")
})
app.listen(port, () => {
  console.log("works on port: " + port)
})
