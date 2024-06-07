import { useEffect, useState } from "react";

const minhapromessa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const meuint = Math.floor(Math.random() * 10) + 1;
    if (meuint === 1 || meuint === 2) {
      reject({ msg: "erro", numero: meuint });
    } else {
      resolve([
        { id: 1, nome: "ernesto", ira: 7.6 },
        { id: 2, nome: "lucas", ira: 7.5 },
        { id: 3, nome: "diogo", ira: 7.8 },
      ]);
    }
  }, 3000);
});

const Promessa2 = () => {
  const [dados, setdados] = useState([]);
  useEffect(() => {
    getpromessa2();
  }, []);

  const getpromessa2 = async () => {
    try {
      const data = await minhapromessa2;
      setdados(data);
    } catch (error) {
      alert(error.msg);
    }
  };

  console.log(dados);
  return (
    <div>
      <h1>Q2</h1>
      {dados.map((item) => {
        return (
          <h1 key={item.id}>
            {item.nome}--{item.ira}
          </h1>
        );
      })}
    </div>
  );
};

export default Promessa2;
