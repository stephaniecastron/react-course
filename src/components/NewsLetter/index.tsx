import styles from "./NewsLetter.module.css";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import Button from "../Button";

const NewsLetter = () => {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.titulo}>Inscreve-se para ganhar descontos</h2>
      <form className={styles.form}>
        <Fieldset>
          <InputText placeholder="Digite seu melhor email"/>
        </Fieldset>
        <Button variant="default" type="submit">Inscrever-se</Button>
      </form>
    </section>
  );
};

export default NewsLetter;
