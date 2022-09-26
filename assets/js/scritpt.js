///////// Varibles///////////////////////
var city="";
var searchCity= $('#city-imput');
var buttonSearch = $('#form-submit')
var ApiKey= "f94e53623ff698447585ddbe3bf5e63b"
var CurrentTemp= $('#temp');
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
    var date = new Date(response.dt*1000).toLocaleDateString();
    $(cityCurrent).html(response.name + "("+date+")");
    var CurrentTemp = (response.main.temp);
    console.log(CurrentTemp)
    console.log(date)




  }
  
  );
}

///////^^^^^look up icon info later for openweather api//////

console.log(city)
  /////////// button////////
  $('#form-submit').on('click', getsearch);