// StringCalculator.js
function StringCalculator() {

    
}


StringCalculator.prototype.add = function(string_numbers) {
  
    if (string_numbers.includes('-')) {
        return "Negatives not allowed";
        }
    numbers = string_numbers.replace(/(\r\n]\n]\r)/gm,",");
    if (numbers== '') {
        return 0;
    }
     else if (numbers.length === 1){
        return (parseInt(numbers));
    } 
    else {
       var res = numbers.split(',');
        var total = 0;
        var arrayLength = res.length;
        
        for (var i = 0; i < res.length; i++) {
            
            if(res[i]<1000){
            total = total + parseInt( res[i]);
          }
           
        }
         
        return total; 
    }
};

module.exports=StringCalculator