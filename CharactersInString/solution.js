function count (string) {     
    let obj = {};
    let strArray = string.split('');
    for(let i =0; i<strArray.length;i++){
      if(obj.hasOwnProperty(`${strArray[i]}`)){
         obj[strArray[i]] = obj[strArray[i]] + 1; 
         }
       else{
          obj[strArray[i]] = 1;
        }
    }
    return obj;
  }