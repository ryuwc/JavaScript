const p1 = ['rock', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'paper', 'paper', 'rock', 'scissors']
const p2 = ['paper', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'rock']

const playGame = (p1, p2) => {
	for (let i = 0; i < p1.length; i++) {
    let p1_choice = p1[i]
    let p2_choice = p2[i]
    if (p1_choice === 'rock' && p2_choice === 'paper') {
      console.log(2)
    } else if (p1_choice === 'paper' && p2_choice === 'scissors') {
      console.log(2)
    } else if (p1_choice === 'scissors' && p2_choice === 'rock') {
      console.log(2)
    } else if (p1_choice === 'paper' && p2_choice === 'rock') {
      console.log(1)
    } else if (p1_choice === 'scissors' && p2_choice === 'paper') {
      console.log(1)
    } else if (p1_choice=== 'rock' && p2_choice === 'scissors') {
      console.log(1)
    } else if (p1_choice === p2_choice) {
      console.log(0)
    }
  }
}

console.log(playGame(p1, p2))
// 2
// 0
// 2
// 0
// 2
// 1
// 2
// 1
// 0
// 2
