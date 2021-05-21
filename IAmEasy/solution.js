process.stdin.resume();
process.stdin.setEncoding("utf-8");

var num = "";

process.stdin.on("data", function(number){
    num = number;
});

process.stdin.on("end", function(){
    calculate(num);
});

function calculate(digit){
    for(i=1;i<=10;i++){
        res = digit * i; 
        process.stdout.write(res+"\n");
    }
}