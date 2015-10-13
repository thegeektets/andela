function numToWord(number){
    
    var strnumber = number.toString();
    
    var rsltstring="";
    
    for(var i = 0; i < strnumber.length; i++ ){
     
     switch(strnumber[i]){
         
        case '0':
             rsltstring = rsltstring +"zero ";
             break;
        case '1':
             rsltstring = rsltstring +"one";
             break;
        case '2':
             rsltstring = rsltstring +"two ";
             break;
        case '3':
             rsltstring = rsltstring +"three ";
             break;
        case '4':
             rsltstring = rsltstring +"four ";
             break;
        case '5':
             rsltstring = rsltstring +"five ";
             break;
        case '6':
             rsltstring = rsltstring +"six ";
             break;
        case '7':
             rsltstring = rsltstring +"seven ";
             break;
        case '8':
             rsltstring = rsltstring +"eight ";
             break;
        case '9':
             rsltstring = rsltstring +"nine ";
             break;
        default:
            console.log('undefined');
            break;
              
     }
        
    }
    
    return rsltstring;
}

numToWord(4343);