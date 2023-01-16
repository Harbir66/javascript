function changeCapitalization(string){
  const array = string.split('');
  let newString='';
  array.forEach(char => {
    newString+=(char.charCodeAt(0)>= 'a'.charCodeAt(0) )?char.toUpperCase():char.toLowerCase();
        
  });
  return newString;
}

// console.log(changeCapitalization("MeRRy hAD a LITTle lAMp"))
// console.log(changeCapitalization("FOSID dasdf NDdsDfdssdSD"))

const changeCapitalization2 = (string) =>{
  const array = string.split('');
  let newString='';
  array.forEach(char => {
    newString+=(char.charCodeAt(0)>= 'a'.charCodeAt(0) )?char.toUpperCase():char.toLowerCase();
        
  });
  return newString;
};

// console.log(changeCapitalization2("MeRRy hAD a LITTle lAMp"))
// console.log(changeCapitalization2("FOSID dasdf NDdsDfdssdSD"))

module.exports = {changeCapitalization,changeCapitalization2};