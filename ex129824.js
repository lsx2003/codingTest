// [다음에 올 숫자]

// 다음에 올 숫자
// 문제 설명
// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 < common의 길이 < 1,000
// -1,000 < common의 원소 < 2,000
// 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
// 공비가 0인 경우는 없습니다.
// 입출력 예
// common	result
// [1, 2, 3, 4]	5
// [2, 4, 8]	16

function solution(common) {
  const c = common;
  const gap = c[0] - c[1];
  const ratio = c[1] / c[0];
  if (c[2] - c[1] === c[1] - c[0]) {
    return c[c.length - 1] - gap;
  } else if (c[1] ** 2 === c[0] * c[2]) {
    return c[c.length - 1] * ratio;
  }
}
