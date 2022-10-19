
function palindrome(str) {
  // str을 대문자로 바꿔준다.
  str = str.toUpperCase()
  // [...str]을 통해 arr로 바꿔주고 뒤집어서 비교
  return console.log(str === [...str].reverse().join(''))
}

  // 출력
palindrome('level')
palindrome('hi')
