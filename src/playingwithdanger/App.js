import React, { Component } from 'react'
import Currency from './Currency'
import CurrencyError from './CurrencyError'

class App extends Component {
	render() {
		return (
			<main className="App">
				<h1>Here are some currency values</h1>
				<p>
					Germany:{' '}
					<CurrencyError>
						<Currency value={21} locale="de-DE" currency="US" />
					</CurrencyError>
				</p>
				<CurrencyError>
					USA: <Currency value={21} locale="en-US" currency="USD" />
				</CurrencyError>
				<h2>
					The currency values displayed are subject to change without
					notice.
				</h2>
			</main>
		)
	}
}

export default App
