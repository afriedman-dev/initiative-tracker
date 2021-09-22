const express = require('express');
const router = require('../src/api/routes');

const app = express();
app.use(express.json());
app.use(router);

const port = process.env.SERVER_PORT || 8080; // May need to use PORT here for Heroku
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on ${port}.`))