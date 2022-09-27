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
////// checkout api call ////// test in class app by switching out git repo with weather app api calls/////
 
// function test(){
//   var URLtest= "https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=f94e53623ff698447585ddbe3bf5e63b";
//   $.ajax({
//     url:URLtest,
//     method:"GET"
//   }).then(function(response){
//     console.log(response)
//   }
  
//   );
// }
//   test()
  /// https://openweathermap.org/current ///// api instructions/// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}/// may need ajust var to work with search/////

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
///////^^^^^look up icon info later for openweather api////// cant get to work////


console.log(city)
  /////////// button////////
  $('#form-submit').on('click', getsearch);