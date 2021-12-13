import React, { Component } from 'react';
import './assets/estilo.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''

        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
                        'O riso é a menor distância entre duas pessoas.', 
                        'Deixe de lado as preocupações e seja feliz.',
                        'Realize o óbvio, pense no improvável e conquiste o impossível.',
                        'Acredite em milagres, mas não dependa deles.',
                        'A maior barreira para o sucesso é o medo do fracasso.', 'Me contrata, juro que sou legal'];
    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' +  this.frases[numeroAleatorio] + ' "';
        this.setState(state);
    }

    render(){
        const image = require('./assets/biscoito-sorte.png');

        return(
            <div className='container'>
                <img src={image.default} alt='Biscoito da Sorte' className='img' />
                <Botao nome='Abrir Biscoito' acaoBtn={this.quebraBiscoito} />
                <h3 className='textoFrase'>{this.state.textoFrase}</h3>
            </div>

        );

    }

}
class Botao extends Component{
    
    render(){

        return(
            <>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </>
        )
    }

}

export default App;
