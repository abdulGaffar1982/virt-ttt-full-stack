function reverseArray(arr: number[]): number[] {
  let reversed: number[] = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));  
console.log(reverseArray([10, 20, 30]));     
