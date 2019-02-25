import React from "react";

const ComponentA = () => {
  return (
    <div>
      <p>
        Hola Cristian
        <br />
        <TextoCristian />
        <BotonCristian />
      </p>
    </div>
  );
};

const BotonCristian = () => {
  return <button>Press</button>;
};

const TextoCristian = () => {
  return <input type="text" placeholder="Ingrese nombgre" />;
};

export { TextoCristian, BotonCristian };

export default ComponentA;
