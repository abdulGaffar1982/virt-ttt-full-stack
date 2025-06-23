function countVowelsAndConsonants(str: string): void {
  let vowels = 0;
  let consonants = 0;

  let lowercaseStr = str.toLowerCase();

  for (let i = 0; i < lowercaseStr.length; i++) {
    let ch = lowercaseStr[i];

    if (ch >= 'a' && ch <= 'z') {
      if (
        ch === 'a' ||
        ch === 'e' ||
        ch === 'i' ||
        ch === 'o' ||
        ch === 'u'
      ) {
        vowels = vowels + 1;
      } else {
        consonants = consonants + 1;
      }
    }
  }

  console.log("Vowels:", vowels);
  console.log("Consonants:", consonants);
}

countVowelsAndConsonants("Hello World");
countVowelsAndConsonants("Programming is fun");
