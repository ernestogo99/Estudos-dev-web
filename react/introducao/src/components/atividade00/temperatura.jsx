const Temperatura = () => {
  const celsius_to_firehi = (celsius) => {
    const f = (9 * celsius) / 5 + 32;
    return f;
  };

  const firehi_to_celsius = (f) => {
    const c = ((f - 32) * 5) / 9;
    return c;
  };

  const kelvin_to_f_and_c = (kelvin) => {
    const celsius = kelvin - 273;
    const fire = (9 * (kelvin - 273)) / 5 + 32;
    return {
      temperatura_em_c: celsius,
      temperatura_em_f: fire,
    };
  };
  return (
    <div>
      <h1>a temperatura em F é: {celsius_to_firehi(30)} </h1>
      <h1>a temperatura em C é: {firehi_to_celsius(86)}</h1>
      <h1>
        a temperatura de K para celsius é:
        {kelvin_to_f_and_c(273).temperatura_em_c}
      </h1>
      <h1>
        a temperatura de K para fire é:{kelvin_to_f_and_c(273).temperatura_em_f}
      </h1>
      <h1>temperatura :{JSON.stringify(kelvin_to_f_and_c(273))}</h1>
    </div>
  );
};

export default Temperatura;
