///////// Varibles///////////////////////
var city="";
var searchCity= $('#city-imput');
var buttonSearch = $('#form-submit')
var ApiKey= "f94e53623ff698447585ddbe3bf5e63b"
var CurrentTemp= $('#temp');
var CurrentHumidity = $('#humidity')
var CurrentWind = $('wind')
var CurrentIcon =$('#Icon')
var CurrentDate =$('#date')

  /// https://openweathermap.org/current /////

  /////////////// Search funtion ////////////////
function getsearch(event){
  event.preventDefault();
  if (searchCity.val().trim()!==""){
   
    city= searchCity.val().trim();
    console.log(city)
    getCurrentWeather(city);
    
  }
}
function getCurrentWeather(city){
  var UrlApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + ApiKey + "&units=imperial";
  $.ajax({
    url:UrlApi,
    method:"GET"
  }).then(function(response){
    console.log(response);
    var weatherIcon = response.weather[0].icon;
    console.log(weatherIcon)
    var UrlIcons= "https://openweathermap.org/img/wn/" + weatherIcon + '@2x.png';
    console.log(UrlIcons)
    var date = new Date(response.dt*1000).toLocaleDateString();
    $(cityCurrent).html(response.name + "<img src="+UrlIcons+">");
    $(CurrentDate).html(date)
    $(temp).html("Temperature: " + response.main.temp + "°")
    $(humidity).html("Humidity: "+response.main.humidity+ "%")
    $(wind).html("Wind: " + response.wind.speed + " MPH")
   
  }
  
  );
}
////// https://openweathermap.org/weather-conditions///////

  /////////// button////////
  $('#form-submit').on('click', getsearch);