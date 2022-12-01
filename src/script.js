function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let i = 1;
  let max = i;
  let data = {};

  for (let i in A) {
    data[A[i]] = A[i];
  }

  console.log(data);

  while (true) {
    if (!data[i]) {
      max = i;
      break;
    }

    i++;
  }

  return max;
}

let d = [];

for (let k = 0; k <= 100000; k++) {
  d.push(k);
}

console.log(solution(d));