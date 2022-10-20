// 화살표 함수(익명 함수다.)

// 함수 선언식
function functionName (name) {

}

// 함수 표현식
const functionVar = function (name) {

}

const add = function (a, b) {
  return a + b
}

function func(f) {
  console.log('call f()')
  console.log(f(1, 2))
}

func((a, b) =>  a + b)


