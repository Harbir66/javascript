function endsWithScript(string){
  if(string.length < 6) return false;
  let lastPart = string.substr(-6);
  return (lastPart==='Script')?true:false;
}

// console.log(endsWithScript('javaScript'))

const endsWithScript2 = string =>{
  if(string.length < 6) return false;
  let lastPart = string.substr(-6);
  return (lastPart==='Script')?true:false;
};

// console.log(endsWithScript2('javaScript'))
module.exports = {endsWithScript,endsWithScript2};