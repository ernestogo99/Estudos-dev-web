import { useSelector } from "react-redux";

const Imagemredux = () => {
  const id = useSelector((state) => state.id.value);

  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id.value}.png`}
        style={{ width: "300px" }}
        alt="pokemon"
      ></img>
    </div>
  );
};

export default Imagemredux;
