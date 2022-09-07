// StringCalculator.js
function StringCalculator() {

    
}


StringCalculator.prototype.add = function(string_numbers) {
    
 if (string_numbers == '') {
        return 0;
    }
    else if (string_numbers.length === 1){
        return (parseInt(string_numbers));
    } 
     
};

module.exports=StringCalculator