// 19. Write a program to check if a character is a vowel or consonant
const vowelOrConsonant = (character) => {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i <= 5; i++) {
        if (vowel[i] === character) {
            return true;
        }
    }
    return false;
}

const character = 't';
console.log(vowelOrConsonant(character));