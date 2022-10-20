arr = [1, 2, 3, 4, 5]

// elem: 개별 요소, idx: 요소의 인덱스, arr: 배열
const myFunc = function (elem, idx, arr) {
  console.log(elem, idx, arr)
}

arr.forEach((elem, idx, arr) => {
  console.log(elem, idx, arr)
})

let result = arr.map((elem) => {
  return elem**3
})

result = arr.filter((elem) => {
  return elem % 2
})

result = arr.filter((elem) => {
  return elem % 2
}).map((elem) => {
  return elem**3
})

console.log(result)