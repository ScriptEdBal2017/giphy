// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$("#random-button").click(function(){
    var randomTerm = $("#random-term").val();
    var custom_url = `https://api.giphy.com/v1/gifs/search?q= ${randomTerm} &rating=pg&api_key=dc6zaTOxFJmzC`
    $.ajax({
        url: custom_url,
        method: "GET",
        success: function(response) {
            // YOUR CODE GOES HERE
            console.log(response);
            var gifs = Math.floor(Math.random() * response.data.length);
            $(".text-center").replaceWith("<img class='text-center' src='" + response.data[gifs].images.original.url + "'>");
        }
    });
});





$("#search-button").click(function(){
  var searchTerm = $("#search-term").val();
  var custom_url = `https://api.giphy.com/v1/gifs/search?q= ${searchTerm} &rating=pg&api_key=dc6zaTOxFJmzC`
    $.ajax({
        url: custom_url,
        method: "GET",
        success: function(response) {
            // YOUR CODE GOES HERE
            console.log(response);
            $(".row.gallery").append("<img src='" + response.data[0].images.original.url + "'>");

        }   
    }); 
    
});

$("#more-button").click(function(){
  var searchTerm = $("#search-term").val();
  var custom_url = `https://api.giphy.com/v1/gifs/search?q= ${searchTerm} &rating=pg&api_key=dc6zaTOxFJmzC`
    $.ajax({
        url: custom_url,
        method: "GET",
        success: function(response) {
            // YOUR CODE GOES HERE
            console.log(response);
             for (var i=0; i<response.data.length; i++){
          $(".row.gallery").append("<img src='" + response.data[i].images.original.url + "'>");
            }
        }   
    }); 
    
});