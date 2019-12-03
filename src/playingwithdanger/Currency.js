import React from 'react'

function Currency(props) {
	const money = new Intl.NumberFormat(props.locale, {
		style: 'currency',
		currency: props.currency
	}).format(props.value)

	return <span className="currency">{money}</span>
}

export default Currency
