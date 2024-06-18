import PropTypes from "prop-types";

const Item = ({ marca, ano_lancamento }) => {
  return (
    <>
      <li>
        {marca}, ano de lançamento: {ano_lancamento}
      </li>
    </>
  );
};

Item.propTypes = {
  marca: PropTypes.string,
  ano_lancament: PropTypes.number,
};

Item.defaultProps = {
  marca: "faltou algo",
  ano_lancamento: 0,
};

export default Item;
