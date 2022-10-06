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
    $(date1).html(date)
    $(temp).html("Temperature: " + response.main.temp + "°")
    $(humidity).html("Humidity: "+response.main.humidity+ "%")
    $(wind).html("Wind: " + response.wind.speed + " MPH")
    getFiveDay()
  }
  
  );
}
console.log(city)
////// https://openweathermap.org/weather-conditions///////
function getFiveDay(){
  var FiveUrl= 'https://api.openweathermap.org/data/2.5/forecast?q='+ city + '&appid=' + ApiKey+ "&units=imperial";
  $.ajax({
    url:FiveUrl,
    method:"GET"
  }).then(function(response){
    console.log(response);
    let weatherIcon1= response.list[7].weather[0].icon;
    let UrlIcons1 =  "https://openweathermap.org/img/wn/" + weatherIcon1 + '@2x.png';
    $(cityCurrent1).html(response.city.name + "<img src="+UrlIcons1+">");
    $(date2).html(response.list[7].dt_txt)
    $(temp1).html("Temperature: " + response.list[7].main.temp + "°")
    $(humidity1).html("Humidity: "+response.list[7].main.humidity+ "%")
    $(wind1).html("Wind: " + response.list[7].wind.speed + " MPH")
    
    let weatherIcon2= response.list[15].weather[0].icon;
    let UrlIcons2 =  "https://openweathermap.org/img/wn/" + weatherIcon2 + '@2x.png';
    $(cityCurrent2).html(response.city.name + "<img src="+UrlIcons2+">");
    $(date3).html(response.list[15].dt_txt)
    $(temp2).html("Temperature: " + response.list[15].main.temp + "°")
    $(humidity2).html("Humidity: "+response.list[15].main.humidity+ "%")
    $(wind2).html("Wind: " + response.list[15].wind.speed + " MPH")

    let weatherIcon3= response.list[23].weather[0].icon;
    let UrlIcons3 =  "https://openweathermap.org/img/wn/" + weatherIcon3 + '@2x.png';
    $(cityCurrent3).html(response.city.name + "<img src="+UrlIcons3+">");
    $(date4).html(response.list[23].dt_txt)
    $(temp3).html("Temperature: " + response.list[23].main.temp + "°")
    $(humidity3).html("Humidity: "+response.list[23].main.humidity+ "%")
    $(wind3).html("Wind: " + response.list[23].wind.speed + " MPH")

    let weatherIcon4= response.list[31].weather[0].icon;
    let UrlIcons4 =  "https://openweathermap.org/img/wn/" + weatherIcon4 + '@2x.png';
    $(cityCurrent4).html(response.city.name + "<img src="+UrlIcons4+">");
    $(date5).html(response.list[31].dt_txt)
    $(temp4).html("Temperature: " + response.list[31].main.temp + "°")
    $(humidity4).html("Humidity: "+response.list[31].main.humidity+ "%")
    $(wind4).html("Wind: " + response.list[31].wind.speed + " MPH")

    let weatherIcon5= response.list[39].weather[0].icon;
    let UrlIcons5 =  "https://openweathermap.org/img/wn/" + weatherIcon5 + '@2x.png';
    $(cityCurrent5).html(response.city.name + "<img src="+UrlIcons5+">");
    $(date6).html(response.list[39].dt_txt)
    $(temp5).html("Temperature: " + response.list[39].main.temp + "°")
    $(humidity5).html("Humidity: "+response.list[39].main.humidity+ "%")
    $(wind5).html("Wind: " + response.list[39].wind.speed + " MPH")
  })
}
  /////////// button////////
  $('#form-submit').on('click', getsearch);