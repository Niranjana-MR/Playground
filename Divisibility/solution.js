process.stdin.resume();
process.stdin.setEncoding('utf-8');

var arr = "";
var sizeOfArray;
var numArray = "";
var check = "";

process.stdin.on("data", function(input){
    arr = input.split("\n");
});

process.stdin.on("end", function(){
    main(arr);
});

function main(myData){
    sizeOfArray = myData[0];
    sizeOfArray = Number(sizeOfArray);
    
    numArray = myData[1].split(" ");

    for(i=0;i<sizeOfArray;i++){
        check += numArray[i].slice(-1);
    }

    check = Number(check);

    if(check%10 == 0){
        process.stdout.write("Yes");
    }
    else{
        process.stdout.write("No");
    }
}

