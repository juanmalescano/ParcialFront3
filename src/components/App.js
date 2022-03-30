import React from "react"
import Card from "./Card"
import data from "./data.json"

class App extends React.Component{
  constructor(){
  super()  
  this.state = ({id:1,
                 historia:data[0],
                 historial:[]})
  this.eventHandlerClick = this.eventHandlerClick.bind(this);
  }

  componentDidUpdate(prevProps,prevStatus){
    // si es >= a 5 es porque finalizo ejecuto alert
    if( prevStatus.id >= 5){
      alert("Fin")
      return 
    }
  }

  // manejador del evento click que se pasa como props
  eventHandlerClick(selected){

    //si es mayor a 4 finalizo, seteo el id para que dispare componentDidUpdate y muestre el alert
    if(this.state.id > 4){
      this.setState({...this.state, id: this.state.id+1})

    }else{
    //filtro la seleccion en el array data, obteniendo el proximo paso de la historia
    let arrayProximaData = data.filter(item => item.id === (this.state.id+1)+selected.toLowerCase())

    //valido que traiga un step de la historia
    if(arrayProximaData.length === 0){
      alert("Error al recuperar proximo episodio");
      return
    }

    //seteo state
    this.setState({id : this.state.id+1,
                   historia : arrayProximaData[0], 
                   historial : [...this.state.historial,selected]})
    }
  }

  render(){
    return (<div>
              <Card event={this.eventHandlerClick} data={this.state.historia} historial={this.state.historial}/>
            </div>);
  } 
}

export default App;
