const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    next();
})

app.use("/health", (req, res, next) => {
    res.send("<b>Service is OK!</b>");
});


// ROUTES
app.use("/classes", require("./routes/classes"));
app.use("/subjects", require("./routes/subjects"));
app.use("/students", require("./routes/students"));
app.use("/grades", require("./routes/grades"));


app.listen(3001, () => {
    console.log("Server is running on 3001")
})