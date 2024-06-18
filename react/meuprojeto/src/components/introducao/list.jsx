import Item from "./item";

const List = () => {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="ferrari" ano_lancamento={1985}></Item>
        <Item marca="lamborghini" ano_lancamento={1965}></Item>
        <Item marca="renault" ano_lancamento={1889}></Item>
        <Item></Item>
      </ul>
    </>
  );
};

export default List;
