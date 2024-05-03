import React, { Component } from "react";

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            sobrenome: '',
        };

        this.gravar = this.gravar.bind(this);
    }

    gravar() {

    }

    render() {
        return (
            <div>
                <h1>Cadastro</h1>
                <input type="text" placeholder="nome" onChange={(e) => this.setState({ nome: e.target.value })}></input>
                <br />
                <input type="text" placeholder="sobrenome" onChange={(e) => this.setState({ sobrenome: e.target.value })}></input>
                <button onClick={this.gravar}>Gravar</button>
            </div>
        );
    }
}
export default Cadastro;
