const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const config = require("./config/db");
const account = require("./routes/account");
const mongoose = require("mongoose");
const session = require("express-session");



const app = express();

const port = process.env.PORT || 8080;

app.use(passport.initialize());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

require('./config/passport') (passport);

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "src")));

mongoose.connect(config.db);

mongoose.connection.on("connected", () => {
    console.log("Подключение к базе успешно");
});

mongoose.connection.on("error", (err) => {
    console.log("Подключение к базе произошло с ошибкой: " + err);
})



app.get("/", (req, res) => {
    res.send('Тест сайта');
});

app.use("/account", account);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});
app.listen(port, () => {
   console.log("Сервер был запущен по порту: " + port);
});