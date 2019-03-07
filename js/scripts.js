$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {

    var userInput = $("input#item").val();
    var result = maybeNumber(userInput);


    $("#result").text(result);
    event.preventDefault();

  });
});

var maybeNumber = function(userInput) {
  if (parseInt(userInput)) {
    return userInput
  } else {
    return false
  }
};
