import React, { Component } from "react";
import './style.css'
import firebase from "../../Firebase";

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            nome: '',
            sobrenome: '',
            nascimento: ''
        };

        this.criarUsuario = this.criarUsuario.bind(this);
    }

    async criarUsuario() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(async (retorno) => {
                await firebase.firestore().collection('usuarios').doc(retorno.user.uid).set({
                    nome: this.state.nome,
                    sobrenome: this.state.sobrenome,
                    nasimento: this.state.nascimento
                });
            })

    }

    render() {
        return (
            <div>
                <h1>Cadastro</h1>
                <input type="text" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })}></input>
                <br />
                <input type="text" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })}></input>
                <br />
                <button onClick={this.criarUsuario}>Cadastrar</button>
            </div>
        );
    }
}
export default Cadastro;
