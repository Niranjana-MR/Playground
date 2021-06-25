function validate(n) {
    let numberOfDigits = n.toString().length;
    let numberArray = n.toString().split('');
    if (numberOfDigits % 2 === 0) {
        for (let i = 0; i < numberOfDigits; i++) {
            if (i % 2 === 0 | i === 0) {
                numberArray[i] = Number(numberArray[i]);
                numberArray[i] *= 2;
                if (numberArray[i] > 9) {
                    numberArray[i] = numberArray[i] - 9;
                }
            } else {
                continue;
            }
        }
    } else {
        for (let i = 1; i < numberOfDigits; i++) {
            if (i % 2 === 0) {
                continue;
            } else {
                numberArray[i] = Number(numberArray[i]);
                numberArray[i] *= 2;
                if (numberArray[i] > 9) {
                    numberArray[i] = numberArray[i] - 9;
                }
            }
        }
    }
    let sum = 0;
    for (let i = 0; i < numberArray.length; i++) {
        sum += Number(numberArray[i]);
    }
    if (sum % 10 === 0) {
        return true;
    } else {
        return false;
    }
}