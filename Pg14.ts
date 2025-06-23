function countCharacter(str: string, char: string): number {
  let count: number = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count = count + 1;
    }
  }

  return count;
}

console.log(countCharacter("banana", "a"));       
console.log(countCharacter("hello", "l"));        
console.log(countCharacter("abcabcabc", "b"));    