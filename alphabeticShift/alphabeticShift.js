function alphabeticShift(str){
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
str = str.toLowerCase().split('')
let reversedWord = [];
for(let i = 0; i < str.length; i++){
    let char = str[i]
    let charIndex = alphabet.indexOf(char)
    if(charIndex === alphabet.length-1){
        char = alphabet[0]
    }
    else if(charIndex < alphabet.length-1){
        char = alphabet[charIndex + 1]
    }
    reversedWord.push(char)
}
return reversedWord.join('')
}

console.log(alphabeticShift('crazy'));