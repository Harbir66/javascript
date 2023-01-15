function countVowels(string){
    let vowelCount=0;
    string=string.toLowerCase();
    [...string].forEach(char => {
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            vowelCount+=1;
        }
    })
    return vowelCount; 
}

// console.log(countVowels('codeacademy'));
// console.log(countVowels('sdfsdfsdfa'))

const countVowels2 = string =>{
    let vowelCount=0;
    string=string.toLowerCase();
    [...string].forEach(char => {
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            vowelCount+=1;
        }
    })
    return vowelCount;
}

// console.log(countVowels2('codeacademy'));
// console.log(countVowels2('sdfsdfsdfa'))

module.exports = {countVowels,countVowels2}