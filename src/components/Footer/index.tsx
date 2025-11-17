import FooterInfo from "./FooterInfo";
import FooterLogo from "./FooterLogo";
import styles from "./Footer.module.css";
import FooterSocial from "./FooterSocial";
import FooterInstitucional from "./FooterInstitucional";

const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape_informacoes}>
        <FooterLogo />
        <FooterInfo />
        <FooterInstitucional />
        <FooterSocial />
      </div>
    </footer>
  );
};

export default Footer;
