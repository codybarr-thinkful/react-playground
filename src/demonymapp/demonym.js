import React from 'react'
import './demonym.css'

export default function Demonym({ name, country }) {
	return (
		<div className='demonym'>
			A {name} comes from {country}
		</div>
	)
}
