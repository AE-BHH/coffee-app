import React from 'react'

export default function CardGenerator({ image, title, desc, ingr }) {
	return (
		<div className='col'>
			<div className='card justify-content-center'>
				<h4
					className='card-header'
					style={{
						backgroundColor: '#016A70',
						color: 'white',
						fontSize: '24px',
						fontWeight: 'bold',
					}}>
					{title}
				</h4>
				<img src={image} className='coffee-image mx-auto' alt='Not found!' />
				<div className='card-body'>
					<p className='card-text'>{desc}</p>
					<h5 className='card-footer'>ingredient(s): {ingr.join(', ')}</h5>
				</div>
			</div>
		</div>
	)
}
