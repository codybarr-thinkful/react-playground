import React from 'react'

class TheDate extends React.Component {
	constructor(props) {
		super(props)
		this.state = { datetime: new Date() }
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				datetime: new Date()
			})
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render() {
		const { datetime } = this.state

		return <div>{datetime.toLocaleString()}</div>
	}
}

export default TheDate
