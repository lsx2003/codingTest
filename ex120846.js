// [합성수 찾기]

// 문제 설명
// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100
// 입출력 예
// n	result
// 10	5
// 15	8
// 입출력 예 설명
// 입출력 예 #1

// 10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.
// 입출력 예 #1

// 15 이하 합성수는 4, 6, 8, 9, 10, 12, 14, 15 로 8개입니다. 따라서 8을 return합니다.

function solution(n) {
  const result = [];
  let count = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === 1 || count === 2) {
      count = 0;
    }
    if (count >= 3) {
      result.push(i);
      count = 0;
    }
  }
  console.log(result);
  return result.length;
}
