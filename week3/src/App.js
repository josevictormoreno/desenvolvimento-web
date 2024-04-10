import React, { Component } from "react";

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			titulo: "Primeiro class component"
		};

		this.mudar = this.mudar.bind(this);
	}


	mudar() {
		var novoTitulo = "Novo titulo";
		this.setState({ titulo: novoTitulo });
		
	}

	render() {
		return( 
			<div>
				<h1>{this.state.titulo}</h1>
				<button onClick={this.mudar}>Mudar titulo</button>
			</div>
		)
	}
}

export default App;
