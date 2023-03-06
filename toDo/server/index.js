const express = requiere("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.listen(port, () => {
  console.log("works on port: " + port)
})
