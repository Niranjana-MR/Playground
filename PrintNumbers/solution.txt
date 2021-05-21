process.stdin.resume();
process.stdin.setEncoding("utf-8");

var num = "";
var str = "";
 
process.stdin.on("data", function(data_in){
    data_in = data_in.split('\n');
    num = data_in[0];
    str = data_in[1];
});

process.stdin.on("end", function(){
    display(str);
});

function display(numbers){
    process.stdout.write(numbers);
}