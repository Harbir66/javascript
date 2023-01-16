function checkAllDigitSame(num){
  num=(num<0)?num*-1:num;
  let digit=num%10;
  num=Math.floor(num/10);
  while(num>0){
    let temp=num%10;
    if(temp!=digit) return false;
    num=Math.floor(num/10);
  }
  return true;
}

// console.log(checkAllDigitSame(22));
// console.log(checkAllDigitSame(23))
// console.log(checkAllDigitSame(-223))

const checkAllDigitSame2 = (num) => {
  num=(num<0)?num*-1:num;
  let digit=num%10;
  num=Math.floor(num/10);
  while(num>0){
    let temp=num%10;
    if(temp!=digit) return false;
    num=Math.floor(num/10);
  }
  return true;
};

// console.log(checkAllDigitSame2(22));
// console.log(checkAllDigitSame2(23))
// console.log(checkAllDigitSame2(-223))
module.exports = {checkAllDigitSame,checkAllDigitSame2};