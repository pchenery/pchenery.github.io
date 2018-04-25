// make sure to use your own!
const API_KEY = "apiKey=gYKQ7ECPIzXW30XYExmpu8cYZV3wgnF3"

const URL = "https://api.giphy.com/v1"

const TRENDING_END_POINT = "/gifs/trending?"

const LIMIT = "&limit=10";

function getGif() {
  // we create a new instance of an HTTP request
  var request = new XMLHttpRequest();
  //we get the text that the user has typed in
  searchTerm = document.getElementById('input-box').value;
  // we set up the url endpoint we want to reach
  var searchQuery = "&tag=" + searchTerm;
  var requestUrl = URL + TRENDING_END_POINT + API_KEY + LIMIT + searchQuery
  
  // we make the request
  request.open('GET', requestUrl);
  request.responseType = 'json';
  request.send();

  //we do something with the successful response
  request.onload = function() {
    var response = request.response;
    //var imageUrl = response.data.image_url;
    var obj = response.data;
    //alert (obj[0].id);
    //document.getElementById('gif').src = imageUrl;
    var row = "<table border='1'>";
    for (i in obj){
        row += "<tr><td>" + obj[i]["id"] + "</td>";
        row += "<td>" + obj[i]["username"] + "</td>";
        row += "<td>" + obj[i]["rating"] + "</td>";
        row += "<td>" + obj[i]["title"] + "</td>";
        row += "<td>" + "<image src>" + obj[i]['imageUrl'] + "</image src>" + "</td></tr>";
    }
    row += "</table>"
    document.getElementById('divTable').innerHTML = row;
    }

    var gifs = $('gifs');
    for (var i = 0; i < obj.length; i++){
        var gif = obj[i];
    }
}

