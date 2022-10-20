/** 매개 변수 출력 */
function myFunc (arg1, arg2, ...arg3) {
  console.log(arg1, arg2, arg3)
}

myFunc()
myFunc(1)
myFunc(1, 2)
myFunc(1, 2, 3)
myFunc(1, 2, 3, 4)

arr = [1, 2, 3, 4, 5]
myFunc(...arr)
console.log(...arr)


arr2 = ['a', 'b', ...arr, 'c']
console.log(arr2)

