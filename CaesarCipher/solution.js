let CaesarCipher = function (shift) {
    return {
      encode:function(str){
      let res = '';
      str = str.toUpperCase();
      let newCharCode;
      for(let i = 0; i<str.length;i++){
        if(str.charCodeAt(i)>90 | str.charCodeAt(i)<65){
          res+=str[i];
          continue;
        }
        newCharCode = str.charCodeAt(i) + shift;
        if(newCharCode>90){
          newCharCode -= 90;
          newCharCode += 64;
        }
        res+= String.fromCharCode(newCharCode);
        }
        return res;
    },
      decode: function(str){
      let res = '';
      str = str.toUpperCase();
      let newCharCode;
      for(let i = 0; i<str.length;i++){
        if(str.charCodeAt(i)>90 | str.charCodeAt(i)<65){
          res+=str[i];
          continue;
        }
        newCharCode = str.charCodeAt(i) - shift;
        if(newCharCode<65){
          newCharCode = 65 - newCharCode;
          newCharCode = 91 - newCharCode;
        }
        res+= String.fromCharCode(newCharCode);
      }
        return res;
      },
    }
  };