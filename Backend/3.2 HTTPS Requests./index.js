import express from "express"
const port = 3000;
const app = express();


app.get("/", (req, res) => {
    res.send("Hell world");
});

app.get("/about", (req, res) => {
    res.send("<h1>about me</h1>");
    res.send("<h2>Name: Shubham Gupta</h2>");
});

app.get("/contact", (req, res) => {
    res.send("Hell world");
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});