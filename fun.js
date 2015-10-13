
var definitions = ["zero","one","two","three","four","five","six","seven",
"eight","nine"]
var words ='';
function numToWord(number){
    
    var strnumber = ''+number;
    for(var i = 0; i < strnumber.length; i++){
          words += definitions[strnumber[i]]+' ';
    }
  
  return words;  
}

numToWord(4343);