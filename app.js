const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.use((req, res, next) => {
    const originalSend = res.send.bind(res);
    res.send = (body) => {
        console.log(`${req.method} ${req.originalUrl} -> ${res.statusCode} ${body}`);
        return originalSend(body);
    };
    next();
});

app.get('/', (req, res) => {
    res.send('hello from backend');
});
app.get('/getContainers', (req, res) => {
    res.send('hello from backend');
});
app.post('/ping', (req, res) => {
    res.send('pong');
});
app.get('/health', (req, res) => {
    res.send('ok');
});
app.post('/echo', (req, res) => {
    res.json(req.body);
});

app.listen(port, () => console.log(`Traceable Backend app listening on port ${port}!`))