// [정수 제곱근 판별]

// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
// 입출력 예
// n	return
// 121	144
// 3	-1

function solution(n) {
  // 양의 정수 n
  // n이 양의 정수 x의 제곱근인지 판단
  let resutl = 0;
  for (x = 1; x <= Math.sqrt(n); x++) {
    if (x === Math.sqrt(n)) {
      result = (x + 1) * (x + 1);
      return result;
    }
  }
  return -1;
}
