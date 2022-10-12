// My very own plain http server without expressjs
//
//

const http = require('http');
const fs = require('fs')
const url = require('url')
const path = require('path')
const users = require('./users')

const PORT = 5000;

server = http.createServer(serverCallBack);

function serverCallBack(request, response) {

    if (request.url.endsWith('.html')) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        filename = path.basename(request.url);
        // console.log(process.cwd())
        fs.readFile(filename, "utf8", (err, html) => {
            if (err) {
                response.write('sorry, out of order');
            }
            else {
                response.write(html);
            }
            response.end();
        })
        return; // the request will come again for the async return value
    } else if (request.method === "GET") {
        if (request.url === '/favicon.ico') {
            response.writeHead(200, { 'Content-Type': 'image/x-icon' });
            response.end();
        } else if (request.url === '/sample.txt') {
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            fs.readFile('sample.txt', "utf8", (err, text) => {
                if (err) {
                    response.write('sorry, out of order');
                }
                else {
                    response.write(text)
                }
                response.end()
            })
        } else if (request.url === '/user.json' || request.url === '/users.json') {
            response.writeHead(200, { 'Content-Type': 'text/json' });
            fs.readFile(request.url.substring(1), "utf8", (err, text) => {
                if (err) {
                    response.write('sorry, out of order');
                }
                else {
                    response.write(text)
                }
                response.end()
            })
        } else if (request.url.endsWith('/')) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write('Go to one of the following pages:<br>' +
                '<a href="ajax1.html">ajax1.html</a><br>' +
                '<a href="ajax2.html">ajax2.html</a><br>' +
                '<a href="ajax3.html">ajax3.html</a><br>' +
                '<a href="ajax4.html">ajax4.html</a><br>' +
                '<a href="ajax5.html">ajax5.html</a><br>');
            response.end()
        } else {
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            params = url.parse(request.url, true).query;
            if (params.name != undefined) {
                response.write('You typed: ' + params.name);
                response.end();
            } else if (params.users === 'all') {
                users.getUsers((users) => {
                    response.write(users);
                    response.end();
                });
                return; // the request will come again for the async call return value
            }
        }
    } else if (request.method === 'POST') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            params = new URLSearchParams(body);
            users.addUser(params.get('name'), (result) => {
                response.write(`POST, ${result}`);
                response.end();
            });
        });
    }
}

server.listen(PORT, listenerCallBack);

function listenerCallBack() {
    console.log("Server started at http://localhost:" + PORT); //the server object listens on port 3000
}
