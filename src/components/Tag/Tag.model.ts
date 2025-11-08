import type { Categoria } from '../../models/Categoria';
import type { Censura } from '../../models/Censura';
import styles from './Tag.module.css';

export interface TagProps {
    value: Categoria | Censura;
}

export const tagClasses = {
    Livre: styles.livre,
    '10 anos': styles.dez,
    '12 anos': styles.doze,
    '14 anos': styles.catorze,
    '16 anos': styles.dezesseis,
    '2D': styles.doisD,
    '3D': styles.tresD,
};
