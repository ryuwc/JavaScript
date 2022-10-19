let i = 0
// while(i < 5) {
//   console.log(i)
//   i += 1
// }

// for(;i < 5;) {
//   console.log(i)
//   i += 1
// }

// for(let i = 0; i < 5; i += 1) {
//   console.log(i)
// }

arr = [1, 2, 3, 4, 5]

obj = {
  name: 'kim',
  age: 10,
  addr: 'Daejeon',
  phone: '123-456-789',
}

for(let key in obj){
  console.log(key, obj[key])
}

// for(let val of obj){
//   console.log(val)
// }