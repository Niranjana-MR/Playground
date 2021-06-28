function hexStringToRGB(hexString) {
    hexString = hexString.toUpperCase();
    let hexArray = hexString.split('');
    hexArray.splice(0, 1);
    let red = hexArray.splice(0, 2).join('');
    let green = hexArray.splice(0, 2).join('');
    let blue = hexArray.splice(0, 2).join('');
    return ({
        r: parseInt(`${red}`, 16),
        g: parseInt(`${green}`, 16),
        b: parseInt(`${blue}`, 16)
    })
}