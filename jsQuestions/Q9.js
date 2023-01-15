function changeCharToNext(input){
    let newString='';
    [...input].forEach(char =>{
        let ascii=char.charCodeAt()-'a'.charCodeAt();
        ascii=(ascii+1)%26;
        newString+=String.fromCharCode('a'.charCodeAt()+ascii);       
    })
    return newString;
}

// console.log(changeCharToNext('codeacademy'))
// console.log(changeCharToNext('lazyinterns'))

const changeCharToNext2 = input => {
    let newString='';
    [...input].forEach(char =>{
        let ascii=char.charCodeAt()-'a'.charCodeAt();
        ascii=(ascii+1)%26;
        newString+=String.fromCharCode('a'.charCodeAt()+ascii);       
    })
    return newString;
}

// console.log(changeCharToNext2('codeacademy'))
// console.log(changeCharToNext2('lazyinterns'))

module.exports = {changeCharToNext,changeCharToNext2}