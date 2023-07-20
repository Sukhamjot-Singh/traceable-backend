const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 5000;

app.get('/', (req, res) => {
    res.send('hello from backend');
});
app.get('/getContainers', (req, res) => {
    res.send('hello from backend');
});

app.listen(port, () => console.log(`Traceable Backend app listening on port ${port}!`))