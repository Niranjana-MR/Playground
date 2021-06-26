function alphabetPosition(text) {
    text = text.toLowerCase();
    let pattern = /[a-z]?/g;
    text = text.match(pattern).join('');
    console.log(text);
    let res = [];
    let position = 0;
    for (let i = 0; i < text.length; i++) {
        position = Number(text.charCodeAt(i)) - 96;
        res[i] = position;
    }
    return (res.join(' '));
}