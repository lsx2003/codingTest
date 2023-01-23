// [최빈값 구하기]

// 문제 설명
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

// 제한사항
// 0 < array의 길이 < 100
// 0 ≤ array의 원소 < 1000
// 입출력 예
// array	result
// [1, 2, 3, 3, 3, 4]	3
// [1, 1, 2, 2]	-1
// [1]	1

function solution(array) {
  const map = new Map();

  for (let el of array) {
    const data = map.get(el) || 0;
    map.set(el, data + 1);
  }

  const newArr = [...map].sort((a, b) => b[1] - a[1]);
  console.log(newArr);
  if (newArr.length === 1) return newArr[0][0];
  if (newArr[0][1] === newArr[1][1]) {
    return -1;
  } else {
    return newArr[0][0];
  }
}
