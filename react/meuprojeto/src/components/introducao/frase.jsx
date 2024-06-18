import styles from "./frase.module.css";

const Frase = () => {
  return (
    <div className={styles.frasecontainer}>
      <p className={styles.frasecontent}>Este é um componente com uma frase</p>
    </div>
  );
};

export default Frase;
