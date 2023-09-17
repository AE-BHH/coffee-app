import React, { useEffect, useState } from 'react'
import { getCoffeeData } from '../api'
import CoffeeList from './CoffeeList'

export default function Index() {
	const [coffee, setCoffee] = useState([])

	useEffect(() => {
		getCoffeeData()
			.then((data) => {
				console.log(data, typeof data)
				setCoffee(data)
			})
			.catch((error) => {
				console.log('Data not fetched properly!', error)
			})
	}, [])

	return (
		<div>
			<h1>Hello World!</h1>
			<CoffeeList coffee={coffee} />
		</div>
	)
}
