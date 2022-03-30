import React from "react";
import "../index.css";

class Card extends React.Component {
  
  render() {
    return (
      <div className="layout">
        <h1 className="historia">{this.props.data.historia}</h1>
        <div className="opciones">
          <div className="opcion">
            <button id="A" className="botones" onClick={()=>this.props.event("A")}>A</button>
            <h2>{this.props.data.opciones.a}</h2>
          </div>
          <div className="opcion">
            <button id="B" className="botones" onClick={()=>this.props.event("B")}>B</button>
            <h2>{this.props.data.opciones.b}</h2>
          </div>
        </div>
        <div className="recordatorio">
          <h3>
            Seleccion anterior: {
              //si hay algo en el historial muestro el ultimo
              this.props.historial.length>0
              ? this.props.historial[this.props.historial.length - 1]
              : ""}
          </h3>
          <h4>Historial de opciones elegidas</h4>
          {this.props.historial.length>0 ? (
            <ul>
              { 
              //si el array de historial tiene mas de un elemento muestro opciones elegidas
              this.props.historial.length > 1 ?

                   this.props.historial.map((item,index )=> {
                   return this.props.historial.length-1 !== index ? 
                          <li key={index}>
                            {item}
                          </li> 
                          : ""
                  })
                  : ""
              }
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Card;
