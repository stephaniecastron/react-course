import FooterInfo from './FooterInfo'
import FooterLogo from './FooterLogo'
import styles from './Footer.module.css'
import FooterInstitutional from './FooterInstitutional'
import FooterRede from './FooterRede'

const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape_informacoes}>
        <FooterLogo />
        <FooterInfo />
        <FooterInstitutional />
        <FooterRede />
      </div>
    </footer>
  )
}

export default Footer
