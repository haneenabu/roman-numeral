(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Business logic
// function Hello() {
//   this.name = 'hello';
// }
// Hello.prototype.sayHi = function () {
//   return this.name;
// };

function NumToConvert(userInput){
  var divides='';
  if (userInput.length === 4){
    var test = parseInt(userInput.length) -4;
    divides = thousands(userInput, test);
    var test1 = parseInt(userInput.length) -3;
    divides += hundreds(userInput, test1);
    var test2 = parseInt(userInput.length) -2;
    divides += tens(userInput, test2);
    var test3 = parseInt(userInput.length) -1;
    divides += ones(userInput, test3);
    return divides;
  } else if (userInput.length === 3) {
    var test1 = parseInt(userInput.length) -3;
    divides += hundreds(userInput, test1);
    var test2 = parseInt(userInput.length) -2;
    divides += tens(userInput, test2);
    var test3 = parseInt(userInput.length) -1;
    divides += ones(userInput, test3);
    return divides;
  } else if (userInput.length === 2){
    var test2 = parseInt(userInput.length) -2;
    divides += tens(userInput, test2);
    var test3 = parseInt(userInput.length) -1;
    divides += ones(userInput, test3);
    return divides;
  } else if (userInput.length === 1){
    var test3 = parseInt(userInput.length) -1;
    divides += ones(userInput, test3);

  }
  function thousands(userInput, test){
    var roman = '';
    //for 1st place
    for (var i = userInput[test]; i >0 ; i--) {
      roman += 'M';
    }
    return roman;
  }
  function hundreds(userInput, test1){
    //second place
    var roman = '';
    if (userInput[test1] <= 3) {
      for (var i = userInput[test1]; i >0 ; i--) {
        roman += 'C';
      }
    }else if (userInput[test1] === '4') {
      roman += 'CD';
    }else if (userInput[test1] >= 5 && userInput[test1] !== '9') {
      roman += 'D';
      var num = parseInt(userInput[test1]) - 5;
      for (var i = num; i >0; i--) {
        roman += 'C';
      }
    }else {
      roman += 'CM';
    }
    return roman;
  }
  function tens(userInput, test2){
    var roman = '';
    //third place
    if (userInput[test2] <= 3) {
      for (var i = userInput[test2]; i >0 ; i--) {
        roman += 'X';
      }
    }else if (userInput[test2] === '4') {
      roman += 'XL';
    }else if (userInput[test2] >= 5 && userInput[test2] !== '9') {
      roman += 'L';
      var num = parseInt(userInput[test2]) - 5;
      for (var i = num; i >0; i--) {
        roman += 'X';
      }
    }else {
      roman += 'XC';
    }
    return roman;
  }
  function ones(userInput, test3){
    var roman = '';
    //fourth place
    if (userInput[test3] <= 3) {
      for (var i = userInput[test3]; i >0 ; i--) {
        roman += 'I';
      }
    }else if (userInput[test3] === '4') {
      roman += 'IV';
    }else if (userInput[test3] >= 5 && userInput[test3] !== '9') {
      roman += 'V';
      var num = parseInt(userInput[test3]) - 5;
      for (var i = num; i >0; i--) {
        roman += 'I';
      }
    }else {
      roman += 'IX';
    }
    return roman;
  }
   return divides;
}
exports.roman = NumToConvert;
// exports.pickles = Hello;

},{}],2:[function(require,module,exports){
 var RomanConverter = require('./../js/scripts.js').roman;
//User Interface
$(document).ready(function(){
  $("#converter").submit(function(event){
    event.preventDefault();
    var input = $("input#originNum").val();
    if (isNaN(input)) {
      alert("You did not enter a number");
    } else if ((input < 0) || (input > 3999)){
      alert("Please enter a number between 1-3999");
    } else {
      var output = RomanConverter(input);
      $("#romanNum").text(output);
      $("#result").show();
    }
  });
});

},{"./../js/scripts.js":1}]},{},[2]);
