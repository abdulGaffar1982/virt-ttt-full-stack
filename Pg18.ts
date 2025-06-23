function totalOfMatchingNumbers(arr: number[]): number {
  let total = 0;
  let counts: { [key: number]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (counts[num] === undefined) {
      counts[num] = 1;
    } else {
      counts[num] = counts[num] + 1;
    }
  }

  for (let key in counts) {
    if (counts[key] > 1) {
      total = total + parseInt(key) * counts[key];
    }
  }

  return total;
}

console.log(totalOfMatchingNumbers([1, 2, 3, 2, 4, 3, 5]));  
console.log(totalOfMatchingNumbers([10, 20, 20, 30, 10]));  
console.log(totalOfMatchingNumbers([1, 2, 3, 4, 5]));       
