function getCoffeeData() {
	return fetch(`https://api.sampleapis.com/coffee/hot`)
		.then((res) => res.json())
		.then((res) => {
			return res
		})
		.catch((err) => err)
}

module.exports = {
	getCoffeeData,
}
