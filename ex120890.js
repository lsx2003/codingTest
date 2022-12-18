// [가까운 수]

// 문제 설명
// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 1 ≤ array의 원소 ≤ 100
// 1 ≤ n ≤ 100
// 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

function solution(array, n) {
  // [10, 11, 12] , 3
  const newArr = array.sort().map((el) => Math.abs(el - n)); // [3, 2, 1]
  let minVal = newArr[0];

  for (el of newArr) {
    if (el < minVal) {
      minVal = el; // 1
    }
  }
  const idx = newArr.indexOf(minVal); //2
  // 가장 차이가 작은 값 array[idx];

  return array.sort()[idx];
}
