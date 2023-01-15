function getLargestEven(array){
    evenArray = array.filter(element => element%2==0);
    return evenArray.length == 0? -1 : Math.max(...evenArray);
}

// console.log(getLargestEven([1,2,3,4,5]))
// console.log(getLargestEven([1,3,5,7]));
// console.log(getLargestEven([4,121,32,4,667,312112]))

const getLargestEven2 = (array) => {
    evenArray = array.filter(element => element%2==0);
    return evenArray.length == 0? -1 : Math.max(...evenArray);
}

// console.log(getLargestEven2([1,2,3,4,5]))
// console.log(getLargestEven2([1,3,5,7]));
// console.log(getLargestEven2([4,121,32,4,667,312112]))

module.exports = {getLargestEven,getLargestEven2};