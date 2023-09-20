import React from 'react'

export default function Navbar({ type, setType }) {
	return (
		<>
			<nav
				className='navbar bg-secondary'
				style={{ height: '200px', marginBottom: '50px' }}>
				<div className='container-fluid align-items-center'>
					<img
						style={{ borderRadius: '50px', width: '120px', marginLeft: '20px' }}
						src='https://static.vecteezy.com/system/resources/thumbnails/002/412/377/small/coffee-cup-logo-coffee-shop-icon-design-free-vector.jpg'
						alt='Logo'
						className='d-inline-block'
					/>

					<h1
						style={{
							fontStyle: 'italic',
							fontFamily: 'cursive',
							color: 'white',
							fontWeight: 'bolder',
						}}>
						"Coffee should be black as hell, strong as death, and sweet as love"
					</h1>

					<button
						style={{
							backgroundColor: '#016A70',
							color: 'white',
							padding: '5px',
							textAlign: 'center',
							width: '150px',
							borderRadius: '10px',
							border: 'none',
							fontWeight: 'bolder',
							fontStretch: 'expanded',
							marginRight: '100px',
						}}
						onClick={(e) => setType(type ? false : true)}>
						{type ? <h3>SEE ICED</h3> : <h3>SEE HOT</h3>}
					</button>
				</div>
			</nav>
		</>
	)
}
