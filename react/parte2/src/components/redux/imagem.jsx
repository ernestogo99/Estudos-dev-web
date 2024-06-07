const Imagem = ({ id }) => {
  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
        style={{ width: "300px" }}
        alt="pokemon"
      ></img>
    </div>
  );
};

export default Imagem;
