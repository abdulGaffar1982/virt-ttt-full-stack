function sortArrayAscending(arr: number[]): number[] {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

console.log(sortArrayAscending([5, 2, 9, 1, 7]));  
console.log(sortArrayAscending([10, 3, 8, 6]));    
