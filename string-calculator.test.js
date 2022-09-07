const StringCalculator=require('./string-calculator')


describe("String Calculator",function(){
   var calculator;

   beforeEach(function(){
    calculator=new StringCalculator();
   })
   
   it("should return zero when '' is passed", function(){
    expect(calculator.add('')).toEqual(0);
   })
   
   it("should return integer when string length is 1",()=>{
    expect(calculator.add('1')).toEqual(1);
   })



})