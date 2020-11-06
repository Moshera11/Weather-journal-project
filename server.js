// Setup empty JS array to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express= require('express');

// Start up an instance of app
const app= express();

/* Middleware*/
const bodyParser= require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors= require('cors');
const { url } = require('inspector');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port= 8000;
const Server= app.listen(port,listening());
function listening()
{
    console.log(`running on local server ${port}`);
};

// Post request route 
app.post('/addweatherData', function addweatherData(req,res)
{
    projectData['date'] = req.body.date;
    projectData['temp'] = req.body.temp;
    projectData['city'] = req.body.city;
    projectData['content'] = req.body.content;
    console.log(projectData);
    res.send(projectData);
});

// get request route
app.get('/getData',function (req,res)
{
    res.send(projectData);
});
