import Logo from "../Logo";
import styles from "./Footer.module.css";

const FooterRede = () => {
  return (
    <div className={styles.rede}>
      <h4 className={styles.titulo}>Siga nossas redes :</h4>
      <div className={styles.icones}>
        <Logo src="./whatsapp.png" alt="whatsapp" />
        <Logo src="./instragam.png" alt="Instagram" />
        <Logo src="./tiktok.png" alt="tiktok" />
      </div>
    </div>
  );
};

export default FooterRede;
