//Business logic
function numToConvert(userInput){
  return userInput;
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
