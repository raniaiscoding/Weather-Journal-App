
/**Webinar Notes:
 * 
 */

/**Fetch 
 * let baseURL = 'http://api.animalinfo.org/data/?animal='
let apiKey = '&appid=9f15e45060...';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newAnimal =  document.getElementById('animal').value;
getAnimal(baseURL,newAnimal, apiKey)

}
const getAnimal = async (baseURL, animal, key)=>{

  const res = await fetch(baseURL+animal+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
*/

//https://www.youtube.com/watch?v=WZNG8UomjSI
//link for style css

/**Try1
 *  Global Variables 
const myAPIKey ='3863eb82a9e8bf37fb030140090e5617';


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



const getZip= async () => {
    const zipCode= document.querySelector('#zip').value;
    const mainURL=`api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${myAPIKey}`;

    const res= await fetch(mainURL);
    const data= await res.json();
    
    console.log(data);
};

const generate= document.querySelector('#generate');
generate.addEventListener('click', getZip);


 */

/*Try 2
const generate= document.getElementById('generate');
generate.addEventListener('click', async()=>{
    const zipCode= document.getElementById('zip').value;
    const apiCall=`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${myApiKey}&units=metric`;

    const response= await fetch(apiCall);
    const data= await response.json();
    const temp= data.main.temp;
    console.log(temp);
});*/

/**const getData= async (url='', data={})=> {
    console.log(data);
    const response= await fetch(url, {
        method: 'GET',
        credentials: "same-origin",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringfy(data),
    });

    try{
        
    }
}; */


/**
 * const updateUI = async () => {
    const request = await fetch('/');
    try{
      const allData = await request.json();
      document.getElementById('date').innerHTML= allData.date;
      document.getElementById('temp').innerHTML= allData.temp;
      document.getElementById('content').innerHTML= allData.feelings;
  
    }catch(error){
      console.log("error", error);
    }
  }

 */

/**********************************
 * // Async POST
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

// Async GET
const retrieveData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// TODO-Chain your async functions to post an animal then GET the resulting data

// TODO-Call the chained function
function postGet(){
    postData('/animal',{fav:'lion'})
    .then(function(data){
        retrieveData('/all')
    })
}

postGet()
 */

/**Try3
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const zipCode= document.getElementById('zip').value;

  getData('/dataget')

  .then (function(data){

    console.log(data);

    postData('/datasave',{
      date: newDate,
      temp: temp,
      feelings: feelings
    })
  })
  .then(
  updateUI()
  )

}
*/