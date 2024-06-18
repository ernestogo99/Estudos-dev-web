const Myname = (props) => {
  //descontruindo a props, pois props é um objeto json
  const { nome } = props;
  return (
    <div>
      <h1>fala ai {nome}, beleza?</h1>
    </div>
  );
};

export default Myname;
