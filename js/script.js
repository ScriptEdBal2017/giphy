// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

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

