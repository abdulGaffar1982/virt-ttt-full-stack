function areAnagrams(str1: string, str2: string): boolean {
  let clean1 = "";
  let clean2 = "";

  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i].toLowerCase();
    if (ch >= 'a' && ch <= 'z') {
      clean1 = clean1 + ch;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i].toLowerCase();
    if (ch >= 'a' && ch <= 'z') {
      clean2 = clean2 + ch;
    }
  }

  const sorted1 = clean1.split('').sort().join('');
  const sorted2 = clean2.split('').sort().join('');

  return sorted1 === sorted2;
}

console.log(areAnagrams("listen", "silent"));       
console.log(areAnagrams("triangle", "integral"));   
console.log(areAnagrams("hello", "world"));         
