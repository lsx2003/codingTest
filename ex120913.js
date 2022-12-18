// [잘라서 배열로 저장하기]

// 문제 설명
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_str의 길이 ≤ 100
// 1 ≤ n ≤ my_str의 길이
// my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.

// 입출력 예
// my_str	n	result
// "abc1Addfggg4556b"	6	["abc1Ad", "dfggg4", "556b"]
// "abcdef123"	3	["abc", "def", "123"]

function solution(my_str, n) {
  let temp = my_str[0];
  let result = [];
  for (let i = 1; i < my_str.length + 1; i++) {
    if (i % n === 0 || my_str[i] === undefined) {
      result.push(temp);
      console.log(result);
      temp = [];
    }
    temp = temp + my_str[i];
  }

  return result;
}
