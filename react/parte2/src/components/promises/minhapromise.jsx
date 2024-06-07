const { useEffect, useState } = require("react");

const minhapromise = new Promise((resolve, reject) => {
  //alguma lógica que está produzindo algo e que demora algum tempo
  console.log("iniciando a lógica");
  setTimeout(() => {
    console.log("logica terminada");
    const meuint = Math.floor(Math.random() * 10) + 1;
    if (meuint % 2 === 0)
      resolve({ numero: meuint, msg: "deu certo" }); // cai dentro do response
    else reject({ numero: meuint, msg: "deu tudo errado" }); //cai dentro do error
  }, 3000);
});

const meuget = (url) => {
  //fiz alguma coisa com a url(passei pra promessa,por exemplo)
  console.log(url);
  return minhapromise;
};

const Minhapromise = () => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    console.log("inicio...");
    setloading(true);
    meuget("http://fake")
      .then((response) => {
        console.log(response.numero);
        console.log(response.msg);
      })
      .catch((error) => {
        console.log(error.numero);
        console.log(error.msg);
      })
      .finally(() => {
        console.log("fim...");
        setloading(false);
      });
  }, []);

  const renderizar = () => {
    if (loading)
      return (
        <div>
          <h1>carregando...</h1>
        </div>
      );
    return (
      <div>
        <h1>Testando a promise</h1>
      </div>
    );
  };
  return <div>{renderizar()}</div>;
};
export default Minhapromise;
