const a =(el)=>document.querySelector(el)

var button =a('.button')
var inputvalue = a('.inputvalue')
var ct = a('.ct')
var descc = a('.descc')
var temp = a('.temp')
var main = a('.main')

button.addEventListener('click', function(){


     fetch('http://api.openweathermap.org/data/2.5/weather?q='+'luziania'+'&limit=1&appid=fda25bf436c27c8c55023d92a494b9ea ')
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
