// 4. Enter a  string and find if it's a palindrome

const palindrome = (string) => {
    let stringLength = string.length;
    let j = 0;
    let i = stringLength - 1;
    while (i > j) {
        if (string [j++] !== string [i--]) {
            console.log(string, 'is not a palindrome');
            break;
        } else {
            console.log(string, 'is a palindrome');
            break;
        }
    }
}

let string = 'rotator';
palindrome(string);

