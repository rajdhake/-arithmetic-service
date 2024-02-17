const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
import { add } from './arithmetica';
app.use(cors());

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello world!');
});

// New route for adding two numbers
app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = add(num1, num2)
        res.send(`Sum: ${sum}`);
    } else {
        res.status(400).send('Invalid input. Please provide valid numbers.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
