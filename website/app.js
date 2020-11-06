// Global Variables 
const d = new Date().toDateString();// current date
const apiKey='';
const generator=document.querySelector('#generate');// select the button element with generate id

// add event listener to the button element
generator.addEventListener('click', action);
function action()
{   
    const feeling=document.querySelector('#feelings').value;// assign the element with feelings id value to feeling variable
    const zip= document.getElementById('zip').value;// get input (with id zip) value 
    getweather(zip) //call the async function with the zip parameter
    .then(function(weatherData)//use the .then method to call the async function (post request)
    {
        postWeatherData('/addweatherData', {temp:weatherData.main.temp, city:weatherData.name, date:d, content:feeling})
        .then(getThePostedData());//use .then to call the async function of get requist to the get route in the local server 
        descript(weatherData);// descript function
    }); 
};
    //weather description function as the weather object contain array (or more)of object
    function descript(weatherData)
    {   
        const weat=weatherData.weather;
        const arrayNums=Object.keys(weatherData.weather);
        const nums=parseInt(length);
        if(nums>0)// if the weather oject of two arrays or more then we will loop over each one  
        {
            for (num of nums)
            {
                const weatherDescription=weat[num].description;
                const newDiv=document.querySelector(`#description${num}`);
                newDiv.textContent=weatherDescription;
                const weatherIcon=weat[num].icon;
                document.querySelector(`.icon${num}`).setAttribute('src',`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`);
            }
        }
        else // if the weather oject of one array
        {
            const weatherDescription=weat[0].description;
            document.querySelector('#description0').textContent=weatherDescription;
            const weatherIcon=weat[0].icon;// icon number used to get weather icon
            console.log(weatherIcon);
            document.querySelector('.icon0').setAttribute('src',`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`);
        }
    };

// async function to request the data from the api server
const getweather = async (zip)=>
{
    //fetch data coresponding to the api url
    const res = await fetch(`https:api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=metric`)
    try 
    {   
        const weatherData = await res.json(); //assign the returned object from api to weatherData variable
        console.log(weatherData);
        return weatherData; // return the weatherData to the .then method function
    }
    catch(error) 
    {
        console.log('error', error);
    }
};

// Post request async function to post data to the local server (server.js)
const postWeatherData= async (url='', postData={})=>
{
    const res =await fetch(url,
        {
            method: 'POST', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData), 
        });  
    try
    {
        const newPostData= res;
    }
    catch(error)
    {
        console.log('error', error);
    }
    
};

// async function to request the data from the local server to update the UI
const getThePostedData = async ()=>
{
    //fetch data coresponding to the url
    const res = await fetch('/getData')
    try 
    {   
        const data = await res.json(); //assign the returned object from local server to data variable
        console.log(data);
        document.getElementById('temp').innerHTML=data.temp;// put the temp as text content of div with temp id
        document.getElementById('city').textContent=data.city;
        document.getElementById('date').textContent=data.date;
        document.getElementById('content').textContent=`Your feeling: ${data.content}`;
        document.getElementById('unit').style.display= 'inline';
}
    catch(error) 
    {
        console.log('error', error);
    }
};

