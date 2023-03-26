import React from 'react'
import './counter.css'
class Composant1 extends React.Component{

 constructor(){

    super()

    this.state={

        number : 0

    }

 }
  Ajouter = () =>{
    this.setState({
        number: this.state.number+1
    })
  }

  Retirer = () =>{
    this.setState({
        number: this.state.number-1
    })
  }


    render(){

        return <div>
                    <h1>{this.state.number}</h1>

                    <button onClick={this.Ajouter}>Ajouter</button>
                    <button onClick={this.Retirer}>Retirer</button>

        </div>
    }
  }
export default Composant1