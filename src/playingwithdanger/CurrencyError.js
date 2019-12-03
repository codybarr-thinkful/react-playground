import React, { Component } from 'react'

class CurrencyError extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hasError: false
		}
	}

	static getDerivedStateFromError(error) {
		return { hasError: true }
	}

	render() {
		if (this.state.hasError) {
			return <em>ERROR: Could not display this currency.</em>
		}
		return this.props.children
	}
}

export default CurrencyError
