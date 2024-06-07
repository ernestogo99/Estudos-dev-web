import { useEffect, useState } from "react";

const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const meuint = Math.floor(Math.random() * 10) + 1;
    if (meuint === 1 || meuint === 2) {
      reject({ numero: meuint, msg: "erro" });
    } else {
      resolve([
        { id: 1, nome: "ernesto", ira: 7.6 },
        { id: 2, nome: "lucas", ira: 7.5 },
        { id: 3, nome: "diogo", ira: 7.8 },
      ]);
    }
  }, 3000);
});

const myget = (url) => {
  console.log(url);
  return mypromise;
};

const MYpromise = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    myget("http://fake")
      .then((response) => {
        setdata(response);
      })
      .catch((error) => alert(error.msg));
  }, []);

  return (
    <div>
      <h1>Testando</h1>
      {data.map((item) => (
        <h3 key={item.id}>
          {item.nome}- {item.ira}
        </h3>
      ))}
    </div>
  );
};

export default MYpromise;
