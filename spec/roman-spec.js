var RomanConverter = require('./../js/scripts.js').roman;
var homies = require('./../js/scripts.js').pickles;

describe('roman-numeral', function() {

  it('should test result for 1 as input', function(){
    var output = RomanConverter("1")
    expect(output).toEqual('I')
  });
  it('should test result for 5 as input', function(){
    var output = RomanConverter("5")
    expect(output).toEqual('V')
  });
  it('should test result for 10 as input', function(){
    var output = RomanConverter("10")
    expect(output).toEqual('X')
  });
  it('should test result for 50 as input', function(){
    var output = RomanConverter("50")
    expect(output).toEqual('L')
  });
  it('should test result for 100 as input', function(){
    var output = RomanConverter("100")
    expect(output).toEqual('C')
  });
  it('should test result for 500 as input', function(){
    var output = RomanConverter("500")
    expect(output).toEqual('D')
  });
  it('should test result for 1000 as input', function(){
    var output = RomanConverter("1000")
    expect(output).toEqual('M')
  });
  it('should test result for 4 as input', function(){
    var output = RomanConverter("4")
    expect(output).toEqual('IV')
  });
  it('should test result for 40 as input', function(){
    var output = RomanConverter("40")
    expect(output).toEqual('XL')
  });
  it('should test result for 400 as input', function(){
    var output = RomanConverter("400")
    expect(output).toEqual('CD')
  });
  it('should test result for 9 as input', function(){
    var output = RomanConverter("9")
    expect(output).toEqual('IX')
  });
  it('should test result for 90 as input', function(){
    var output = RomanConverter("90")
    expect(output).toEqual('XC')
  });
  // it('should test result for 5 as input', function(){
  //   var output = new homies(4)
  //   // console.log(output.sayHi())
  //   expect(output.sayHi()).toEqual('hello')
  // });

});
