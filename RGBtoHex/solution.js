function rgb(r, g, b) {
    r = checkValue(r);
    g = checkValue(g);
    b = checkValue(b);
    let hex = '';
    hex += convertHex(r);
    hex += convertHex(g);
    hex += convertHex(b);
    return hex;
}

function convertHex(value) {
    let hex = '';
    hex = value.toString(16);
    if (hex.length !== 2) {
        hex = '0';
        hex += value.toString(16);
    }
    return hex.toUpperCase();
}

function checkValue(value) {
    if (value < 0) {
        value = 0;
    } else if (value > 255) {
        value = 255;
    }
    return value;
}