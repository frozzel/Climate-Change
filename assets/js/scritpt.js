///////// Varibles///////////////////////
var city="";
var searchCity= $('#city-imput');
var buttonSearch = $('#form-submit')
var ApiKey= "f94e53623ff698447585ddbe3bf5e63b"

////// checkout api call ////// test in class app by switching out git repo with weather app api calls/////
  console.log(buttonSearch)
  console.log(searchCity)
function test(){
  var URLtest= "https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=f94e53623ff698447585ddbe3bf5e63b";
  $.ajax({
    url:URLtest,
    method:"GET"
  }).then(function(response){
    // console.log(response)
  }
  
  );
}
  test()
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


}


console.log(city)
  /////////// button////////
  $('#form-submit').on('click', getsearch);