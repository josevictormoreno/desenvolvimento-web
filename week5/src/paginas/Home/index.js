import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>Essa é a página Home.</p>
                <Link to="/contato"><button>Contato</button></Link>
            </div>
        );
    }
}

export default Home;
