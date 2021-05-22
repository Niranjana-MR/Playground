process.stdin.resume();
process.stdin.setEncoding("utf-8");

var num1; 
var num2;

process.stdin.on("data", function(input){
    input = input.split(' ');
    num1 = input[0];
    num2 = input[1];
});

process.stdin.on("end", function(){
    main(num1, num2);
});

function main(a, b){
    if(a<=23 && b>=500 && b<=1000){
        process.stdout.write("Take Medicine");
    }
    else{
        process.stdout.write("Don't take Medicine");
    }
}
