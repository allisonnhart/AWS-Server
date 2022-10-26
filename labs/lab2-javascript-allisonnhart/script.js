document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
        return;
    console.log(value);

    const url = "https://spoonacular.com/food-api/docs#Search-Recipes-by-Nutrients";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let results = "";
            results += "<div class = initialWeather>";
            results += '<h2>Weather in ' + json.name + "</h2>";
            for (let i = 0; i < json.weather.length; i++) {
                results += '<img src="https://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            results += '<h2>' + json.main.temp + " &deg;F</h2>"
            results += "<p>"
            for (let i = 0; i < json.weather.length; i++) {
                results += json.weather[i].description
                if (i !== json.weather.length - 1)
                    results += ", "
            }
            results += "</p>";
            document.getElementById("weatherResults").innerHTML = results;
            results += "</div>";
        });

    const url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=cfe0889b3feb8268d3a0bd0c90cc3ec6";
    fetch(url2)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            let forecast = "";
            for (let i = 0; i < json.list.length; i++) {
                forecast += "<div class = day>";
                forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                forecast += '<img src="https://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
                forecast += "<p>" + "Feels like: " + json.list[i].main.feels_like +"</p>";
                forecast += "<p>" + "Low: " + json.list[i].main.temp_min +"</p>";
                forecast += "<p>" + "High: " + json.list[i].main.temp_max +"</p>";
                forecast += "<p>" + "Humity: " + json.list[i].main.humidity + " %" +"</p>";
                forecast += "</div>";
            }   
            document.getElementById("forecastResults").innerHTML = forecast;

        });
    
});
