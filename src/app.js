var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var para = document.querySelector('.para');
var temp = document.querySelector('.temp');
var mintemp = document.querySelector('.mintemp');
var maxtemp = document.querySelector('.maxtemp');
var desc = document.querySelector('.desc');
var humidity = document.querySelector('.humidity');
var speed = document.querySelector('.speed');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var paraValue = data['weather'][0]['main'];
  var mintempValue = data['main']['temp_min'];
  var maxtempValue = data['main']['temp_max'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humidityValue = data['main']['humidity'];
  var speedValue = data['wind']['speed'];

  main.innerHTML = nameValue;
  para.innerHTML = paraValue;
  desc.innerHTML = descValue;
  temp.innerHTML = parseFloat(tempValue-273.15).toFixed(2)+"&#8451";
  mintemp.innerHTML = "Min: "+parseFloat(mintempValue-273.15).toFixed(2)+"&#8451";
  maxtemp.innerHTML = "Max: "+parseFloat(maxtempValue-273.15).toFixed(2)+"&#8451";
  humidity.innerHTML = "Humidity: "+humidityValue+"%";
  speed.innerHTML = "Wind: "+speedValue+"mph";
  input.value ="";

})

.catch(err => alert("Invalid city name!"));
})
