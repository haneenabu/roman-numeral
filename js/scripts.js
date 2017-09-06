//Business logic
function Hello() {
  this.name = 'hello';
}
Hello.prototype.sayHi = function () {
  return this.name;
};

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
exports.pickles = Hello;
