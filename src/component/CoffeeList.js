import CardGenerator from './CardGenerator'
export default function CoffeeList({ coffee }) {
	return (
		<div>
		
			<div className='container justify-content-center'>
				<div className='row align-item-center '>
					{coffee.map((item) => (
						<CardGenerator
							key={item.id}
							title={item.title}
							image={item.image}
							desc={item.description}
							ingr={item.ingredients}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
