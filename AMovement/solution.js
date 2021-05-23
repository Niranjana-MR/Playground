process.stdin.resume();
process.stdin.setEncoding("utf-8");

var num;
var steps;
var temp;

process.stdin.on("data", function(input){
    num = input;
});

process.stdin.on("end", function(){
    main(num);
});

function main(number){
    number = Number(number);
    while(number>0){
        steps = number/5;
        temp = number - (steps*5);
        for(i=0;i<5;i++){
            if(temp == i){
                steps = steps + temp;    
            }
        }
        number = 0;
    }
    process.stdout.write(steps);
}