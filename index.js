const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello");
})

const PORT = process.env.PORT || 4000 // herokuのportを使う or 5000を使えって意味   

app.listen(PORT)