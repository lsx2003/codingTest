// [연속된 수의 합]

// 문제 설명
// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

// 제한사항
// 1 ≤ num ≤ 100
// 0 ≤ total ≤ 1000
// num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.
// 입출력 예
// num	total	result
// 3	12	[3, 4, 5]
// 5	15	[1, 2, 3, 4, 5]
// 4	14	[2, 3, 4, 5]
// 5	5	[-1, 0, 1, 2, 3]

function solution(num, total) {
  //등차가 1인  등차수열을 반환해야 한다.
  // a, a+1, a+2 => 12
  // 3a + 3 = 12
  // a = (12 -3)/3

  let result = [];

  for (let i = 0; i < num; i++) {
    // total에서 0에서 1씩 증가시키면 num번만큼 빼준다.
    total = total - i;
  }

  let start = total / num;
  console.log(start);
  for (let i = 0; i < num; i++) {
    result.push(start + i);
  }
  return result;
}
