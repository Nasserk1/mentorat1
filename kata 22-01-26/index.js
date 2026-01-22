
function countPositivesSumNegatives(input) {
  let count = 0;
  let sum =0; 
  for (let i=0; i< input.length; i++) {
    if (input[i]>0) {
      count += 1;
    }
    if (input[i]<0) {
      sum += input[i];
    }
    if 
    // console.log(count, sum);
  }
  return [count, sum]
}


let result = countPositivesSumNegatives([]);
console.log(result)