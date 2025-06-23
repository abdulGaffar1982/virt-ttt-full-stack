function findMaximum(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMaximum([3, 7, 2, 9, 4]));   
console.log(findMaximum([10, 20, 5, 8]));    
