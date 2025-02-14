import express from 'express';
const app = express();
const port = 3000;
// 192.168.0.151 mere ip h y 
app.get('/', (req, res) => {
    console.log(req.ip); // Client IP address print karega

    res.send('Hello World! ' + new Date().toLocaleString()); // Fixed typo
});

app.get('/services', (req, res) => {
    console.log(req.ip); // Client IP address print karega

    res.send('services! ' + new Date().toLocaleString()); // Fixed typo
});

app.get('/contact', (req, res) => {
    console.log(req.ip); // Client IP address print karega

    res.send('contact! ' + new Date().toLocaleString()); // Fixed typo
});

app.get('/about', (req, res) => {
    console.log(req.ip); // Client IP address print karega

    res.send('about! ' + new Date().toLocaleString()); // Fixed typo
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
