import React, { useEffect, useState } from 'react'
import { getCoffeeData } from '../api'
import CoffeeList from './CoffeeList'
import Navbar from './Navbar'

export default function Index() {
	const [coffee, setCoffee] = useState([])
	const [type, setType] = useState(true)

	useEffect(() => {
		getCoffeeData(type)
			.then((data) => {
				setCoffee(data)
			})
			.catch((error) => {
				console.log('Data not fetched properly!', error)
			})
	}, [type])

	return (
		<div>
			<Navbar 
            type={type}
            setType={setType}/>
			<CoffeeList coffee={coffee} />
		</div>
	)
}
