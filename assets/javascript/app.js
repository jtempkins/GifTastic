var topics = ["spongebob", "simpsons", "rugrats", "garfield", "jetsons"]


function createButtons() {

    // Deleting the cartoon buttons before adding new buttons so no repeats
    $("#buttonsClear").empty();

    // Looping through the array of topics
    for (var i = 0; i < topics.length; i++) {

      // Then dynamicaly generating buttons for each cartoon in the array.
      var a = $("<button>");
      a.addClass("cartoon");
      a.attr("data-name", topics[i]);
      a.text(topics[i]);
      $("#buttonsClear").append(a);
    }
  }

//  Event handler when a new cartoon is added
    $("#addCartoon").on("click", function(event) {
    event.preventDefault();

    var cartoon = $("#cartoonInput").val().trim();
    topics.push(cartoon);

    // Calling createButtons
    createButtons();
    $("#addCartoon").html("");
  });

  // Calling the createButtons to display the initial list of cartoons
  createButtons();



//attempt to add images from here:

  // //  // Event listener for  topic buttons
   $("button").on("click", function() {

   var toon = $(this).attr("cartoon");
  
   //   // // Storing our giphy API URL for a random cat image
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=LbW049mOxR1yjz75yNYMbx9Ufj1FxX32&limit=10";

  //   // // // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    // //   // After the data from the AJAX request comes back
      .then(function(response) {
      
        var results = response.data;
        for(var i = 0; i < results.length; i++){
          var cartoonDiv = $("<div>");
          var p = $("<p>").text("Rating: " + results[i].rating);
          var toonImage = $("<img>");
          toonImage.attr("src", results[i].images.fixed_height.url);
          cartoonDiv.append(p);
          cartoonDiv.append(toonImage);
          $("#CartoonHolder").prepend(cartoonDiv);
        }

    // //     // Saving the image_original_url property
    //     var imageUrl = response.data.image_original_url;

    // //     // Creating and storing an image tag
    //     var toonImage = $("<img>");

    // //     // Setting the catImage src attribute to imageUrl
    //     toonImage.attr("src", imageUrl);
    //     toonImage.attr("alt", "cartoon image");

    // //     // Prepending the catImage to the images div
    //     $("#images").prepend(toonImage);
   })});
