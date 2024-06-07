const Filhoo = ({ falarcompai }) => {
  return (
    <div>
      <h1>Filho</h1>
      <button
        onClick={() => {
          falarcompai("oi pai");
        }}
      >
        Enviar mensagem
      </button>
    </div>
  );
};

export default Filhoo;
