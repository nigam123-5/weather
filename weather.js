function weathr() {

    var city = document.getElementById('city').value; link = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=e8cde246c8e175455f7354975fd34a4a";
    $.getJSON(link, function (data) {

        document.getElementById('temp').innerHTML = '<br><p>City : ' + city + ' <p>Temperature : ' + Math.floor(data.main.temp) + '&#8451;</p><p>Humidity : ' + data.main.humidity + '%</p>';
        document.getElementById('img').src = 'https://raw.githubusercontent.com/Subhash2807/Weather-App-JavaScript/master/icons/' + data.weather[0].icon + '.png';
    });
}
function defult() {
    var city = "Lucknow"; link = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=e8cde246c8e175455f7354975fd34a4a";
    $.getJSON(link, function (data) {
        // var temp = Math.floor(data.main.temp);
        // $(".temp").append(temp);
        document.getElementById('temp').innerHTML = '<br><p>City : ' + city + ' <p>Temperature : ' + Math.floor(data.main.temp) + '&#8451;</p><p>Humidity : ' + data.main.humidity + '%</p>';
        document.getElementById('img').src = 'https://raw.githubusercontent.com/Subhash2807/Weather-App-JavaScript/master/icons/' + data.weather[0].icon + '.png';
    });
}