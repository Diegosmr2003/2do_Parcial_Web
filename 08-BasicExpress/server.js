const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height) / 100; 

    if (isNaN(weight) || isNaN(height)) {
        res.send('Invalid input. Please enter numeric values for weight and height.');
    } else {
        const bmi = (weight / (height * height)) * 10000;
        res.send(`Your BMI is: ${bmi.toFixed(2)}`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
