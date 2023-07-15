var output:Array <string|number> = [];
var count = 1;
function fizzbuzz(){
    for(var count = 1; count<=101;count++){
        if (count %3 ===0 && count%5===0){
            output.push("fizzbuzz")
        } 
        else if(count%3 ===0){
            output.push("fizz")
        }
        else if(count % 5 ===0){
            output.push("buzz")
        }
        else{
            output.push(count)
        }
    }
    console.log(output)
}
fizzbuzz()