const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express(); // app blir express server
const port = 3000

let id = 1
let db = []

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get("/", (req, res) => {
  res.send("Hello World");
})
.post('/', (req, res) => {
  let user = req.body
  user.id = id
  id++
  db.push(user)
  console.log(db)
    res.send("user added to database")
})
.get("/:id", (req, res) => {
  res.send(db);
})
.delete("/:id", (req, res) =>{
})



app.listen(port, () => {
  console.log(`Server open on port ${port}`);
});
 