//Business logic


function numToConvert(userInput){
  if (isNaN(userInput)) {
    alert("You did not enter a number");
  } else if ((userInput < 0) || (userInput > 3999)){
    alert("Please enter a number between 1-3999")
  } else if (userInput % 5 === 0){
    var divides = divByFive(userInput);
    return divides;
  } else if (userInput %5 < 3){
    return userInput;
  } else if (userInput % 5 > 3){
    return userInput;
  }
}

function divByFive(userInput) {
  var roman = '';
  if (userInput % 1000 === 0) {
    var total =  userInput / 1000;
    for (var i = total; i > 0; i--) {
      roman += "M";
    }
  return roman;
  }
}



//User Interface
$(document).ready(function(){
  $("#converter").submit(function(event){
    var input = $("input#originNum").val();
    var output = numToConvert(input);
    $("#romanNum").text(output);
    $("#result").show();
    event.preventDefault();
  });
});
