# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.


## Rania Here

**In the next steps, I'm explaining how I went on the code step by step. I followed the rubric first. Some functions I didn't understand, so I went to nfp.discussions.udacity for help and reference and I used some functions from the weather-app-project-webinar as a reference.**

1- Started the project by downloading express, cors, body-parser, urlencoded using 'npm install package-name' cmd in terminal.

2- created localserver on port 3000 with a callback function to produce feedback on the command line.
fuction returned the correct output on terminal 'server running on port: 3000' and I used the URL: http://localhost:3000/ on the browser and the first draft of weather app showed with no issues.
**Local Server is created successfully.

3-Created API credentials on OpenWeatherMap.com
  My API KEY: - Your API key is bc0119081d05fd7a38cb9aa5180a1aa9

4- saved both API Key and Endpoint URL in const variables in the app.js file

5- To create fetch() function:
          needed to get the zipCode entry using getElementById and .value to get the value not the string
          passed the URL to the fetch() as now we have the api key and the zip code
          needed to put fetch() inside async-await function to wait for zip code to be entered by user
          needed to addEventListener on the button to call on the async function
          defined variable const to get button by using getElementByID, then added the listener to it
          used the listener to call the async function

  At first, I got an error 404 page not found, I didn't understand where the error is coming from, then I looked the error in the community, I found the answer that I didn't add "http://" in the begining of the url, so I added it and it retured a result that I couldn't understand body: readableStream, so I followed the instruction from the guru to add .json() function to get a readable data(parse the data), then I used .main.temp to get to the extact temprature.

          ##Data is successfully returned from the external API.##

6- Return Endpoint Data/GET Route: Server Side
          back to the service.js file, set up GET route with url and a call back function to return JS object created on the top of the server.js file

7- Client Side: create async-await function to fetch data from app end point

8- Same with POST Route:
          in server side, created post route to save date (received from client side) in projectData object using the line:
          projectData= { ...req.body };//used spread operator as explained by the guru to avoid writing over data, instead expand the object and add new data if necessary.

9- On client side: created async-await function for post route to save data entered by user

10- I added all async functions inside the same function getContent to be called later by the eventListener

11-Dynamic UI part, 
created dynamicUI function that uses innerHTML on each of the elements (date/temp/feelings) to dynamically fetch the data entered by user into the content part and used get route to display it on the app

12- called the dynamicUI function inside getContent function to be called at the same time by the same EventListenter.

13- Date was one month below count, so I used d.getMonth()+1, as explained by guru


14- CSS file/HTML file were updated to change appearance a little. 



