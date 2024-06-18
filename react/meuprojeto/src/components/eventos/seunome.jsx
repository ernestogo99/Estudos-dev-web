import { useState } from "react";

const Seunome = ({ setnome }) => {
  return (
    <div>
      <h1>digite seu nome</h1>
      <input
        type="text"
        placeholder="qual seu nome?"
        onChange={(event) => setnome(event.target.value)}
      ></input>
    </div>
  );
};

export default Seunome;
