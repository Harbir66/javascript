//  change to ternary and handle lexical if same length
function findLongestString(stringArray){
  let longestString=stringArray[0];
  let maxLength=stringArray[0].length; 
  stringArray.forEach(string => {
    if(string.length > maxLength){
      longestString=string;
      maxLength=string.length;
    }
  });
  return longestString;
}

// console.log(findLongestString(["we", "love", "code", "academy"]))
// console.log(findLongestString(["sd",'a']))

const findLongestString2 = (stringArray) => {
  let longestString=stringArray[0];
  let maxLength=stringArray[0].length; 
  stringArray.forEach(string => {
    if(string.length > maxLength){
      longestString=string;
      maxLength=string.length;
    }
  });
  return longestString;
};

// console.log(findLongestString2(["we", "love", "code", "academy"]))
// console.log(findLongestString2(["sd",'a']))

module.exports = {findLongestString,findLongestString2};