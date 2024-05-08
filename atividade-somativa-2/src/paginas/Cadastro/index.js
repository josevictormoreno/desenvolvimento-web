import React, { Component } from "react";
import './style.css'
import firebase from "../../Firebase";
import { Link } from "react-router-dom";

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
                    nascimento: this.state.nascimento
                });
        window.alert("Cadastro realizado!")
            })

    }

    render() {
        return (
            <div>
                <h1>Cadastro</h1>
                <input type="text" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })}></input>
                <br />
                <input type="password" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })}></input>
                <br />
                <input type="text" placeholder="nome" onChange={(e) => this.setState({ nome: e.target.value })}></input>
                <br />
                <input type="text" placeholder="sobrenome" onChange={(e) => this.setState({ sobrenome: e.target.value })}></input>
                <br />
                <input type="text" placeholder="Data de nascimento" onChange={(e) => this.setState({ nascimento: e.target.value })}></input>
                <br />
                <button onClick={this.criarUsuario}>Cadastrar</button>
        <Link to="/"><button>Tela de Login</button></Link>
            </div>
        );
    }
}
export default Cadastro;
