const express = require('express'); const app = express();
let PORT = 8080
app.listen(8080, () => { console.log(`Server is running on port ${PORT}`); });
app.get('/hello', (req, res) => { res.send('Hello World!'); });
app.get('/hello/:name', (req, res) => { const name = req.params.name; res.send(`Hello ${name}`); });
app.get('/hello-query', (req, res) => { const name = req.query.name; res.send(`Hello ${name}`); });
app.get('/', (req, res) => { res.sendFile(__dirname + '/public/index.html'); });
