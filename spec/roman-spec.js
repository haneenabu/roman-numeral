var RomanConverter = require('./../js/scripts.js').roman;
var homies = require('./../js/scripts.js').pickles;

describe('roman-numeral', function() {



  it('should test result for 1 as input', function(){
    var output = RomanConverter("4")
    console.log(output)
    expect(output).toEqual('IV')
  });

  it('should test result for 1 as input', function(){
    var output = new homies(4)
    // console.log(output.sayHi())
    expect(output.sayHi()).toEqual('hello')
  });




  // it('should test result for 1 as input', function(){
  //   var romanConverter = = new RomanConverter(4);
  //
  //   var output = romanConverter.NumToConvert();
  //
  //   console.log(output)
  //   expect(output).toEqual('IV')
  // });
});
