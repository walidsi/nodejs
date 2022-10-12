console.log("Hello world!")

const {readFile, readFileSync} = require('fs');

const txt = readFileSync("./hello.txt", "utf8")
console.log(txt)

const express = require('express');

const app = express();

app.get('/', (request, response) => {
    readFile("./hello.html", "utf8", (err, html) => {
        if (err) {
            response,send(500).send('sorry, out of order')
        }
        response.send(html)
    })
});

app.listen(process.env.PORT || 3000, () =>
    console.log("App available on http://localhost:3000"));

