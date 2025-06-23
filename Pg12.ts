function isPalindrome(str: string): boolean {
  let lowercaseStr = str.toLowerCase();
  let cleanedStr = "";

  for (let i = 0; i < lowercaseStr.length; i++) {
    let ch = lowercaseStr[i];
    if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')) {
      cleanedStr = cleanedStr + ch;
    }
  }

  let reversedStr = "";
  for (let i = cleanedStr.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + cleanedStr[i];
  }

  if (cleanedStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("madam"));      // true
console.log(isPalindrome("hello"));      // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
                  


