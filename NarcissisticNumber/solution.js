function narcissistic(value) {  
    let strNumber = value.toString();
    let exponent = strNumber.length;
    
    let arrayValue = strNumber.split('');
    let poweredValue, sum = 0;
    for(let i = 0; i<exponent; i++){
      poweredValue = Number(arrayValue[i])**exponent;
      sum += poweredValue;
    }
    if(sum === value){
      return true;
    }
    return false;
  }