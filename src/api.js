function getCoffeeData(type) {
	return fetch(`https://api.sampleapis.com/coffee/${type ? "hot" : "iced"}`)
		.then((res) => res.json())
		.then((res) => {
			return res
		})
		.catch((err) => err)
}

module.exports = {
	getCoffeeData,
}
