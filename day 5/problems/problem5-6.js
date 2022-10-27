axios.get('https://api.example.com/data')
	.then(function (response) {
	console.log((response))
})

// 동기
// 모든 일을 순서대로 하나씩 처리하는 것

// 비동기
// 작업을 시작한 후 결과를 기다리지 않고 다음 작업을 처리하는 것(병렬적 수행)
// 시간이 필요한 작업들은 요청을 보낸 뒤 응답이 빨리 오는 작업부터 처리