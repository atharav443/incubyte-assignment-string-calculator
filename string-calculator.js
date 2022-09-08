// StringCalculator.js
function StringCalculator() {

    
}


StringCalculator.prototype.add = function(string_numbers) {
    this.number=string_numbers
    if (string_numbers.includes('-')) {
        var res = string_numbers.split(',');
        const arr=[]
        for(var i=0;i<string_numbers.length;i++){
            if(string_numbers[i]<0){
               arr.push(`${string_numbers[i]}`);
            }
        }
        
        if(arr.length >1){
            return arr
        }
        else{
            return "Negatives not allowed";
        }
        
    }
    numbers = this.number.replace(/(\r\n]\n]\r)/gm,",");
    if (numbers== '') {
        return 0;
    }
     else if (numbers.length === 1){
        return (parseInt(numbers));
    } 
    else {
       var res = numbers.split(',');
        var total = 0;
       
        
        for (var i = 0; i < res.length; i++) {
            
        if(res[i]<1000){
                
            total = total + parseInt( res[i]);
        }
        else if(res[i]>='a' && res[i]<='z'){
            var index=0;
            var i=res[i].charCodeAt(index)
            total=total + (i-96);
        }
           
        }
         
        return total; 
    }
};

module.exports=StringCalculator