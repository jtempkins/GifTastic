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

//  Event handler when a button is clicked
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


  // ISSUES: input form is not clearing


