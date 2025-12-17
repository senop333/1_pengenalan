import express from'express';
const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res.send('Helooo World');
});

app.get('/about',(req, res) => {
    res.send('Helooo about');
});

app.get('/contact',(req, res) => {
    res.send('Helooo contactt');
});

app.use("/", (req,res) => {
    res.status(404)
    res.send("Halaman tidak ditemukan");
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});