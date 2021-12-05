function iFNumberContainsDigit(number, key){
    while(number > 0){
        if(number%10 == key){
            return true;
        }
        number = Math.trunc(number / 10);        
    }
    return false;
}