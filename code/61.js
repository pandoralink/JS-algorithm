var decodeString = function(s) {
  let numStack = [];
  let charStack = [];
  let num = 0;
  for(let i = 0; i < s.length; i++) {
      if(s[i] === ']') {
          let char = charStack.pop();
          let tempStr = '';
          while(char !== '[') {
              tempStr = char + tempStr;
              char = charStack.pop();
          }
          let str = tempStr;
          const num = numStack.pop();
          for(let i = 0; i < num - 1; i++) {
              str += tempStr;
          }
          charStack.push(str);
      }
      else if(/[0-9]/.test(s[i])) {
          num = num * 10 + (s[i] - '0');
      }
      else if(s[i] === '[') {
        numStack.push(num);
        num = 0;
        charStack.push(s[i])
      }
      else {
          charStack.push(s[i]);
      }
  }
  return charStack.join('');
}
console.log(decodeString("20[le]"));