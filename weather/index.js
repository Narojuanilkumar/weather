
var inputvalue=document.querySelector('#cityinput')
var btn=document.querySelector('#add')
var city=document.querySelector('#cityoutput')
var descrip=document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
 var apik="01dd02631fde3207e3ea6629a28f118b"
function convertion(val)
{
    return(val -273).toFixed(3)
}
btn.addEventListener('click',function()
{
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    //fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
        {
        var nameval= data['name']
        var dp=data['weather']['0']['description']
        var temperature=data['main']['temp']
        var windspeed=data['wind']['speed']
        city.innerHTML='weather of'+nameval;
        temp.innerHTML= 'Temperature:'+convertion(temperature)
        wind.innerHTML=' wind Speed:'+windspeed;
    
    })
    .catch(err =>alert("you entered wrong city"))
})


