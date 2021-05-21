process.stdin.resume();
process.stdin.setEncoding("utf-8");

var std_input = "";
var std_input2 = "";

process.stdin.on("data", function(input){
    input = input.split('\n');
    std_input = input[0];
    std_input *= 2;
    std_input2 = input[1];
});

process.stdin.on("end", function(){
    main(std_input, std_input2);
});

function main(input1, input2){
    process.stdout.write(input1+"\n"+input2);
}
