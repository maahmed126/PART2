'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
  return res.json({
    "foo": "bar",
    "built_at": 1616337212,
    "deployed_at": 1222037111
    });
});
  

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
