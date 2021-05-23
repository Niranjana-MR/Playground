process.stdin.resume();
process.stdin.setEncoding("utf-8");

var num;

process.stdin.on("data", function(input){
    num = Number(input);
});

process.stdin.on("end", function(){
    calculate(num);
});

function calculate(number){
    if(number%3==0){
        process.stdout.write("YES");
    }
    else{
        process.stdout.write("NO");
    }
}