//User Interface
$(document).ready(function(){
  $("#converter").submit(function(event){
    var input = $("input#originNum").val();
    if (isNaN(input)) {
      alert("You did not enter a number");
    } else if ((input < 0) || (input > 3999)){
      alert("Please enter a number between 1-3999");
    } else {
      var output = numToConvert(input);
      $("#romanNum").text(output);
      $("#result").show();
    }


    event.preventDefault();
  });
});
