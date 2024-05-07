import React, { Component } from "react";
import firebase from "../../Firebase";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.logar = this.logar.bind(this);
    }

    async logar() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                window.location.href = '/principal';
            })
            .catch(() => {
        window.alert("Email ou Senha incorretos!")
      })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <input type="text" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })}></input>
                <br />
                <input type="password" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })}></input>
                <br />
                <button onClick={this.logar}>Logar</button>
            </div>
        );
    }
}

export default Login;
