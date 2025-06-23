function findNonMatchingCharacters(str: string, char: string): string[] {
  let result: string[] = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== char) {
      result.push(str[i]);
    }
  }

  return result;
}

console.log(findNonMatchingCharacters("banana", "a"));   
console.log(findNonMatchingCharacters("hello", "l"));    
console.log(findNonMatchingCharacters("aaaaa", "a"));    
