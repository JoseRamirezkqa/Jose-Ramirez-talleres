const changeLetter = (palabras, letra) => {
    console.log(palabras);
    palabras.forEach(convertido => {
        convertido.replaceAll(letra,'X')
    });
    return palabras
}
console.log(changeLetter(['palabra','casa'],'a'));
const changeLetters = (words, letter) => {
    console.log(words);
    words.forEach((element) => {
        element.replaceAll(letter, 'X')
    });
    return words
}

console.log(changeLetters(['manzana', 'banana', 'mandarina', 'pantalla'], 'a'))