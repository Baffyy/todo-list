import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
const todos = [];
let listedNumber = 1;

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs", {todos: todos});
})

app.post("/submit", (req, res) => {
    const listed = req.body.task;
    const list = {
        id: listedNumber++,
        text: listed,
    };

    todos.push(list);

    res.redirect('/')
})


app.listen(port, () => {
    console.log("server is running");
})