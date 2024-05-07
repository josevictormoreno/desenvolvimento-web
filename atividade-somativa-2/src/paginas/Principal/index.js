import React, { Component } from "react";
import firebase from "../../Firebase";

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            sobrenome: '',
            nascimento: ''
        };
    }

    async componentDidMount() {
        await firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                var uid = user.uid;
                await firebase.firestore().collection('usuarios').doc(uid).get()
                    .then((doc) => {
                        this.setState({
                            nome: doc.data().nome,
                            sobrenome: doc.data().sobrenome,
                            nascimento: doc.data().nascimento
                        });
                    })
            }
      else {
        window.location.href = '/';
      }
        });
    }

    render() {
        return (
            <div>
                Nome: {this.state.nome} <br />
                Sobrenome: {this.state.sobrenome} <br />
                Data de Nasimento: {this.state.nascimento} <br />
            </div>
        );
    }
}

export default Principal;
