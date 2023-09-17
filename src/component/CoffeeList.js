import CardGenerator from './CardGenerator'
export default function CoffeeList({ coffee }) {
	return (
		<div>
			<h3>Coffee list</h3>
			{coffee.map((item) => (
				<CardGenerator
					title={item.title}
					desc={item.description}
					ingr={item.ingredients}
				/>
			))}
		</div>
	)
}
