const apikey ="fda25bf436c27c8c55023d92a494b9ea"
const apiCountryURL ="https://countryflagsapi.com/png/"

const cityinput = document.querySelector('#city-input');
const serachbtn = document.querySelector('#search');


const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperature span')
const descElement = document.querySelector('#description')
const weatherElement = document.querySelector('#weather-icon')
const umidityElement = document.querySelector('#umidity span')
const countryElement  = document.querySelector('#country')
const windElement = document.querySelector('#wind span')



const getweatherdata = async(city) =>{
     const apiweatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;

     const res = await fetch(apiweatherURL)
     const data = await res.json()

     return data
}
const showweatherdata = async (city) => {
     const data = await getweatherdata(city);

          cityElement.innerHTML=data.name
          tempElement.innerHTML=parseInt(data.main.temp)
          descElement.innerHTML=data.weather[0].description
          weatherElement.innerHTML=setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
          umidityElement.innerHTML=`${data.humidity}%`
          countryElement.innerHTML=setAttribute("src", apiCountryURL + data.sys.country)
          windElement.innerHTML=`${data.wind.speed}`

          console.log(city)
        
}

serachbtn.addEventListener('click',(e)=>{

     e.preventDefault()
     const city = cityinput.value;

     showweatherdata(city)
})


/*
const a =(el)=>document.querySelector(el)

var button =a('.button')
var inputvalue = a('.inputvalue')
var ct = a('.ct')
var descc = a('.descc')
var temp = a('.temp')
var main = a('.main')

button.addEventListener('click', function(){


     fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&limit=1&appid=fda25bf436c27c8c55023d92a494b9ea ')
     .then(Response => Response.json())
     .then(data => {
       
        let ctvalue = data['name'];
        let desccvalue = data['weather'][0]['description'];
        let tempvalue = data['main']['temp'];
        let mainvalue = data['main']['humidity'];
       

        tempvalue =  parseInt(tempvalue)+1;
             var conv = (tempvalue -273)

        temp.innerHTML= conv + 'ºC';

        ct.innerHTML = ctvalue;
        descc.innerHTML = desccvalue;
        main.innerHTML = mainvalue + '%' +': Umidade do ar';
      

      
          


     })
     .catch(err => alert("cidade não encontrada..."))


})
*/