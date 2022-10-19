result = ''
N = 5
for(let i = 0; i < N; i++){
  for(let j = 0; j < i + 1; j++){
    result += '*'
  }
  result += '\n'
}
console.log(result)

