  ////// checkout api call ////// test in class app by switching out git repo with weather app api calls/////
  
function test(){
  var URLtest= "https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=f94e53623ff698447585ddbe3bf5e63b";
  $.ajax({
    url:URLtest,
    method:"GET"
  }).then(function(response){
    console.log(response)
  }
  
  );
}
  test()
  /// https://openweathermap.org/current ///// api instructions/// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}/// may need ajust var to work with search/////
