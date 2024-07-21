import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

type Tformdata = {
  name: string;
  age: number;
};

const Reacthookform = () => {
  const { register, handleSubmit } = useForm<Tformdata>(); //register-serve para registrar os campos
  //const nome = watch("nome"); //escuta quando a gente altera o campo,agindo como o onchange
  //const age = watch("age"); não é uma boa pratica usar ele,pois a cada alteração ele atualiza
  //o handlesubmit le os campos para nos além de fazer o envio,usar o preventdefault e etc

  const handlesave = (data: Tformdata) => {
    console.log(data);
  };

  //primeiro parametro()=> recebe os dados válidos e validados
  //segundo parametro, recebe os erros

  return (
    <form onSubmit={handleSubmit(handlesave, (error) => console.log(error))}>
      <fieldset>
        <legend>Preencha o formulario</legend>

        <label>
          <span>Nome</span>
          <br />

          <input {...register("name")} placeholder="nome"></input>

          <br></br>
          <span>Digite o nome aqui</span>
        </label>

        <br></br>
        <br></br>

        <label>
          <span>idade</span>
          <br></br>

          <input {...register("age")} type="number" placeholder="idade"></input>

          <br></br>
          <span>Digite a idade aqui</span>
        </label>

        <br></br>
        <br></br>

        <button type="submit">Enviar</button>
      </fieldset>
    </form>
  );
};

export default Reacthookform;
