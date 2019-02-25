import React, { Component } from "react";
import "./App.css";
import ComponentA, { BotonCristian, TextoCristian } from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

class App extends Component {
  render() {
    return (
      <div>
        <p style={{ color: "red" }}>Hola mundo</p>
        <br />
        Componente A
        <div>
          <ComponentA />
        </div>
        <br />
        <div>
          Componente b
          <ComponentB />
        </div>
        <br />
        Componente A disgregado (boton de componente)
        <BotonCristian />
        <br />
        Componente A disgregado (text de componente)
        <TextoCristian />
      </div>
    );
  }
}

export default App;
