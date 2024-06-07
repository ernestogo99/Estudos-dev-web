import { useEffect } from "react";

fetch("https://api.github.com/users/ernestogo99")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
// o fetch retorna uma promessa

fetch("https://api.github.com/users/ernestogo99")
  .then((response) => {
    return response.json(); // retorna uma promessa
  })
  .then((data) => {
    console.log(data); // mostra o dado que queremos (objeto json)
  });

function acessarApi() {
  const res = fetch("https://api.github.com/users/ernestogo99");
  console.log(`Res: ${res}`); // imprime a promessa do fetch
  // retorna RES[Object promise]
}
// async await
// é outra forma de resolver promessas
// quando uma função é assincrona, ela se transforma em uma promessa
async function dizeroi() {
  return "oi";
}

dizeroi().then((msg) => console.log(msg));

async function AcessarApi() {
  const res = await fetch("https://api.github.com/users/ernestogo99");
  const rejson = await res.json();
  console.log(rejson.id);
}

// testando o async
const minhapromessa = new Promise((resolve, reject) => {
  const x = true;
  if (x) {
    resolve({ msg: "deu certo" });
  } else {
    reject({ msg: "deu errado" });
  }
});

const Meuasync = () => {
  // tratativas externas devem ser tratadas no useefct
  /*useEffect(() => {
    minhapromessa
      .then((data) => {
        console.log(data.msg);
      })
      .catch((data) => {
        console.log(data.msg);
      });
  }, []);*/
  // usando o async await ao inves de then e catch
  useEffect(() => {
    getpromessa();
  }, []);

  async function getpromessa() {
    try {
      const data = await minhapromessa; // é o mesmo que pegar o then
      console.log(data.msg);
    } catch (error) {
      console.log(error.msg);
    }
  }
  return (
    <div>
      <h1>Testando o async</h1>
    </div>
  );
};

export default Meuasync;
