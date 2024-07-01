import style from "./relogio.module.scss";
interface props {
  tempo: number | undefined;
}

const Relogio = ({ tempo = 0 }: props) => {
  const minutos = Math.floor(tempo / 60); // arredonda o número para baixo
  const segundos = tempo % 60;
  const [minuto_dezena, minuto_unidade] = String(minutos).padStart(2, "0"); //permite que nos tenhamos uma cadeia de caractere padrao
  const [segundo_dezena, segundo_unidade] = String(segundos).padStart(2, "0");
  return (
    <>
      <span className={style.relogioNumero}>{minuto_dezena}</span>
      <span className={style.relogioNumero}>{minuto_unidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundo_dezena}</span>
      <span className={style.relogioNumero}>{segundo_unidade}</span>
    </>
  );
};

export default Relogio;
