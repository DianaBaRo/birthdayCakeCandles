function birthdayCakeCandles(ar) {
  let count = 0;
  
  let max = Math.max(...ar);
  
  for ( let i = 0; i < ar.length; i++ ) {
    if (ar[i] === max) {
      count++;
    }
  }
  return count;
};
