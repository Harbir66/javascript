function concatStrings(string1,string2){
  return string1.slice(1).concat(string2.slice(1));  
}

// console.log(concatStrings('code','academy'))
// console.log(concatStrings('12','1'))

const concatStrings2 = (string1,string2) => {
  return string1.slice(1).concat(string2.slice(1));
};

// console.log(concatStrings2('code','academy'))
// console.log(concatStrings2('12','1'))

module.exports = {concatStrings,concatStrings2};