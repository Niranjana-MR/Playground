function createPhoneNumber(numbers){  
    let phNumber = '(';
    phNumber += numbers.splice(0,3).join('');
    phNumber += ') ';
    phNumber += numbers.splice(0,3).join('');
    phNumber += '-';
    phNumber += numbers.splice(0).join('');
    return phNumber;  
  }