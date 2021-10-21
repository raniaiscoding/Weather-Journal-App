// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'/'+ d.getDate()+'/'+ d.getFullYear();



//Integerating OpenWeatherMap API
//The API Key variable saved in const variable
const myApiKey= 'bc0119081d05fd7a38cb9aa5180a1aa9';



//async-await function to fetch API Key, then used same function for GET,POST routes
const getContent= async()=>{

    //save zip-code and feelings in variables to be used in the API call and the POST route
    const zipCode= document.getElementById('zip').value;
    const feelings= document.getElementById('feelings').value;

    const apiCall= `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${myApiKey}&units=metric`;
  
    try{
        const goFetch= await fetch(apiCall);
        const weather= await goFetch.json();
        const temp= weather.main.temp;

        //GET Route: Client Side:
        const getData= await fetch('/getContent', {
            method: 'GET',
            credentials: 'same-origin'
        });
        const content= await getData.json();

        //POST Route: Client Side:
        await fetch('/saveContent', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            date: newDate,
            temp: temp,
            feelings: feelings
        })
    });
    
    dynamicUI();
    
    console.log(content);

}catch(error){
    console.log('error', error);
}
};

const dynamicUI = async () => {
    
    try{
      const request = await fetch('/getContent');
      const userData = await request.json();

      document.getElementById('date').innerHTML= `Today is ${userData.date}`;
      document.getElementById('temp').innerHTML= `It's ${userData.temp} degress`;
      document.getElementById('content').innerHTML= `I'm feeling  ${userData.feelings}`;
  
    }catch(error){
      console.log("error", error);
    }
  }

const generate=document.getElementById('generate');
generate.addEventListener('click', getContent);



