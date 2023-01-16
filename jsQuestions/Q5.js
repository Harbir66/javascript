function isLeapYear(year){
  return (year%400==0) || (year%4==0 && year%100!=0);
}

// console.log(isLeapYear(2000))
// console.log(isLeapYear(2100))
// console.log(isLeapYear(2400))

const isLeapYear2 = year => (year%400==0) || (year%4==0 && year%100 !=0);

// console.log(isLeapYear2(2000))
// console.log(isLeapYear2(2100))
// console.log(isLeapYear2(2400))

module.exports = {isLeapYear,isLeapYear2};