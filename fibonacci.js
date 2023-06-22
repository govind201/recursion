const fibs = (n) => {
  const fibArray = [];

  if (n >= 1) {
    fibArray.push(0);
  }
  if (n >= 2) {
    fibArray.push(1);
  }

  for (let i = 2; i < n; i++) {
    const fibNum = fibArray[i - 1] + fibArray[i - 2];
    fibArray.push(fibNum);
  }

  return fibArray;
};

console.log(fibs(8));

const getFibRec = (num) => {
  if (num == 1) return 0;
  if (num == 2) return 1;
  return getFibRec(num - 1) + getFibRec(num - 2);
}

const fibsRec = (nTerms) => {
  if (nTerms <= 0) {
    return;
  }
  let fibArray = [];
  for (let i = 1; i <= nTerms; i++) {
    fibArray.push(getFibRec(i));
  }
  return fibArray;
};

console.log(fibsRec(8));
