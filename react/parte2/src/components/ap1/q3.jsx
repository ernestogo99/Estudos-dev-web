import { useEffect, useState } from "react";

const Questao3 = () => {
  const [dados, setdados] = useState([]);
  const [maior1, setmaior] = useState({ capital: "", populacao: 0 });
  const [menor1, setmenor] = useState({ capital: "", populacao: 0 });
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/region/europe?fields=capital,population"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setdados(data);
        console.table(
          data.map((country) => country.capital[0] + "-" + country.population)
        );
        let populacoes = data.map((pais) => pais.population);
        let maior = Math.max(...populacoes);
        let maiorpais = data.find((pais) => pais.population === maior);
        let menor = Math.min(...populacoes);
        let menorpais = data.find((pais) => pais.population === menor);
        setmaior({
          capital: maiorpais.capital,
          populacao: maiorpais.population,
        });
        setmenor({
          capital: menorpais.capital,
          populacao: menorpais.population,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Q3</h1>
      <h1>
        maior: {maior1.capital}-{maior1.populacao}
      </h1>
      <h1>
        menor:{menor1.capital}-{menor1.populacao}
      </h1>
    </div>
  );
};
export default Questao3;
