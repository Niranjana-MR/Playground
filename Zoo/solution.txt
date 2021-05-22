process.stdin.resume();
process.stdin.setEncoding("utf-8");

var word = "";
var length = 0;
var x = 0;
var y = 0;

process.stdin.on("data", function(input){
    word += input.split('');
});

process.stdin.on("end", function(){
    main(word);
});

function main(arr){
    length = arr.length;
    for(i=0;i<=length;i++){
        if(arr[i] == 'z' || arr[i] == 'Z'){
            x++;
        }
        if(arr[i] == 'o' || arr[i] == 'O'){
            y++;
        }
    }
    x *= 2;
    if(x == y){
     process.stdout.write("Yes");       
    }
    else{
        process.stdout.write("No");    
    }
}