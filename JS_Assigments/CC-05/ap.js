let word = prompt("please enter your sentence")
const vowels = ["a", "e", "i", "o", "u"];
word = word.toLowerCase().split("");
console.log(word)
let counter = 0;


const vowelCounter = (word)=> {
    for(let i =0; i<word.length; i++){
        for(let j =0; j<vowels.length; j++){
            if(word[i] == vowels[j]){
                counter++;
            }
        }
    }
    return console.log(`given sentence is consisted from ${counter} vowels`);
}
 vowelCounter(word);
