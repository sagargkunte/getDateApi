import express from 'express';

let app = express();
const PORT = 8000;
const date = new Date();

app.get('/year',(req,res) =>{ 
    res.write(`<h1>Current year<\h1>`);
    res.write(`<h1>${date.getFullYear()}</h1>`);
    res.end();
});

app.get('/month',(req,res) => {
    res.write(`<h1>Current Month<\h1>`);
    let month = date.getMonth() + 1;
    switch(month) {
        case 1 : month = 'January';
        break;
        case 2 : month = 'February';
        break;
        case 3 : month = 'March';
        break;
        case 4 : month = 'April';
        break;
        case 5 : month = 'May';
        break;
        case 6 : month = 'June';
        break;
        case 7 : month = 'July';
        break;
        case 8 : month = 'August';
        break;
        case 9 : month = 'September';
        break;
        case 10 : month = 'October';
        break;
        case 11 : month = 'Novemeber';
        break;
        case 12 : month = 'December';
        break;
    }
    res.write(`<h1>${month}</h1>`);
    res.end();
});

app.get('/date',(req,res) => {
    res.write(`<h1>Current Date<\h1>`);
    res.write(`<h1>${date.getDate()}</h1>`);
    res.end();
});

app.get('/day',(req,res) => {
    let today = date.getDay() + 1;
    switch(today) {
        case 1  : today = 'Sunday';
        break;
        case 2  : today = 'Monday';
        break;
        case 3  : today = 'Tuesday';
        break;
        case 4  : today = 'Wednesday';
        break;
        case 5  : today = 'Thursday';
        break;
        case 6  : today = 'Friday';
        break;
        case 7  : today = 'Saturday';
        break;
    }
    res.write(`<h1>Today is ${today}<\h1>`);
    res.end();
})

app.get('/today',(req,res) => {
    res.write(`<h1>${date.toLocaleString()}</h1>`);
    res.end();
})
app.listen(PORT,() => console.log('Server is Running in http://localhost:' + PORT));