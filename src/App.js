import React from 'react'
import TheDate from './state/TheDate'
import Counter from './state/Counter'
import Tabs from './state/Tabs'
import DemonynApp from './demonymapp/demonymApp'

function App() {
	const tabsProp = [
		{
			name: 'First tab',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'
		},
		{
			name: 'Second tab',
			content:
				'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		},
		{
			name: 'Third tab',
			content:
				'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.'
		}
	]

	return (
		<div className="App">
			<h1>YOUR APPLICATION NAME!</h1>
			<TheDate />
			<Counter step={2} />
			<Tabs tabs={tabsProp} />
			<DemonynApp />
		</div>
	)
}

export default App
