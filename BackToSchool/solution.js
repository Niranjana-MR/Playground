process.stdin.resume();
process.stdin.setEncoding("utf-8");

var inputData = "";

process.stdin.on("data", function(input){
    inputData= input.split(' ');
});

process.stdin.on("end", function(){
    calcMax(inputData);
});

function calcMax(num){ //3659 3152 914
    if(num[0]>num[1] && num[0]>num[2]){
        process.stdout.write(num[0]);
    }
    else if(num[1]>num[0] && num[1]>num[2]){
        process.stdout.write(num[1]);
    }
    else{
        process.stdout.write(num[2]);
    }
}