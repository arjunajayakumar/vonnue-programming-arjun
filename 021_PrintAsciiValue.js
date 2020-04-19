// Write a program to check Ascii values of a character
const charCode = (character) => {
    let stringLength = character.length;
    for (let i =0; i <= stringLength - 1; i++) {
        console.log(character.charCodeAt(i));
    }
}

let character = 'QRSTU';
charCode(character);