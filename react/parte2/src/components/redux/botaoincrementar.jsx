const Botaoincrementar = ({ incrementar }) => {
  return (
    <div>
      <button
        onClick={() => {
          incrementar();
        }}
      >
        ID+1
      </button>
    </div>
  );
};
export default Botaoincrementar;
