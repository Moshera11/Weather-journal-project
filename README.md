# Weather-Journal App Project
## N.B:
- you should add the apiKey first in the app.js file to accses the weather api.
- you could get your key from the [api site](https://openweathermap.org/api).
## Steps:
- Git clone the [Starter project code](https://github.com/udacity/fend.git) from github.
- Open the folder using Visual Studio Code.
- ### Then start editing in the app.js file
    - get the date use new date()
    - assign the api key to apiKey variable.
    - #### add event listener to the button element.
        - get request to the api and get the weather data use async function.
        - use .then() method to chain requists.
        - call the descript function to select the weather description and icon with if condition, if weather object contain more than one array will loop over arrays to get the description and icon  for each.
        - then use async function of post request to post the data to the local server.
        - then get request the posted data from the local server use async function.
        - data type is object so I used the Object.keys(object).pop() method to get the last item (array) in the object.
        - use the data and assign to the div elements in the htlm.

- ### Then edit the server.js file
    - Identify an emty array to store the posted object in.
    - Require Express to run server and routes.
    - Start up an instance of app.
    - Require body-parser.
    - Require cors.
    - Install the express with comand npm **install express** in the terminal.
    - Install the body-parser with comand **npm install body-parser** in the terminal.
    - Install the cors with comand **npm install cors** in the terminal.
    - Setup Server.
    - Post request route.
    - get request route.
    - run the server with command **node server.js** in the terminal.

- ### Then edit the the html file
    - add div with city id and another one with description id.
    - add div with sup element to display celsius (oC) unit.
    - add div elements with classes to help in styling.

- ### style.css file
 - I have used the flex and grid.
 - put background image.
 
