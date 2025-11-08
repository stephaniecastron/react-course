import styles from './Banner.module.css';
import type { BannerProps } from './Banner.model';

const Banner = ({ src, alt }: BannerProps) => {
    return <img src={src} alt={alt} className={styles.banner} />;
};

export default Banner;
