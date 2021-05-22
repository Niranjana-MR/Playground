process.stdin.resume();
process.stdin.setEncoding("utf-8");

var inputData = "";

process.stdin.on("data", function(input){
    inputData= input.split(' ');
    
});

process.stdin.on("end", function(){
    calcMax(inputData);
});

function calcMax(num){ 
    if(Number(num[0])>Number(num[1]) && Number(num[0])>Number(num[2])){
        process.stdout.write(num[0]);
    }
    
    if(Number(num[1])>Number(num[0]) && Number(num[1])>Number(num[2])){
        process.stdout.write(num[1]);
    }

    if(Number(num[2])>Number(num[0]) && Number(num[2])>Number(num[1])){
        process.stdout.write(num[2]);
    }
}