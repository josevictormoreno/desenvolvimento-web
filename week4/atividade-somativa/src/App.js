import React, {Component} from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			label: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.changeEmailState = this.changeEmailState.bind(this);
		this.changePasswordState = this.changePasswordState.bind(this);
	}

	changePasswordState(e) {
		let state = this.state;
		state.password = e.target.value;
		this.setState(this.state);
	}

	changeEmailState(e) {
		let state = this.state;
		state.email = e.target.value;
		this.setState(this.state);
	}

	handleSubmit() {
		let state = this.state;
		if (this.state.email === 'eduardo.lino@pucpr.br'
				&& this.state.password === '123456') {
			state.label = 'Acessado com sucesso!';
		} else {
			state.label = 'Usuário ou senha incorretos!';
		}
		this.setState(this.state);
	}

	render() {
		return (
			<div className='main'>
				<h1>Login</h1>
				<div>
					<input type='text' name='email' size='30' placeholder='Email' onChange={(e) => this.changeEmailState(e)} />
				</div>
				<div>
					<input type='password' name='password' size='30' placeholder='Password' onChange={(e) => this.changePasswordState(e)}/>
				</div>
				<div>
					<button onClick={this.handleSubmit}>Acessar</button>
				</div>

				<div>
					<label>{this.state.label}</label>
				</div>
			</div>
		);
	}
}
export default App;
