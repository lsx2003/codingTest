// [중앙값 구하기]

// 문제 설명
// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// array의 길이는 홀수입니다.
// 0 < array의 길이 < 100
// -1,000 < array의 원소 < 1,000
// 입출력 예
// array	result
// [1, 2, 7, 10, 11]	7
// [9, -1, 0]	0
// 입출력 예 설명
// 입출력 예 #1

// 본문과 동일합니다.
// 입출력 예 #2

// 9, -1, 0을 오름차순 정렬하면 -1, 0, 9이고 가장 중앙에 위치하는 값은 0입니다.

function solution(array) {
  const sortedArr = array.sort((a, b) => a - b);
  const index = Math.floor(array.length / 2);

  return sortedArr[index];
}
