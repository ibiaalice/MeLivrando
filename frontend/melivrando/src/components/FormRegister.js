import React, { Component } from 'react'
import axios from 'axios'


class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:8080/register', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { name, email, password } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="name"
							value={name}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="email"
							name="email"
							value={email}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="password"
							name="password"
							value={password}
							onChange={this.changeHandler}
						/>
					</div>
                    <button type="submit"
                    >Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm
