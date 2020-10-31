const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hi Bongiwe Moale here. Im currently learning how to use AWS'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
