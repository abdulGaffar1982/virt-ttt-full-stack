function countDigits(str: string): number {
  let count: number = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch >= '0' && ch <= '9') {
      count = count + 1;
    }
  }

  return count;
}

console.log(countDigits("abc123"));         
console.log(countDigits("no digits here")); 
console.log(countDigits("1a2b3c4d5e"));     

