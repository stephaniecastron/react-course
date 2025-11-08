import styles from './Fieldset.module.css';
import type { FieldsetProps } from './Fieldset.model';

const Fieldset = ({ children, variant = 'primary' }: FieldsetProps) => {
    return (
        <fieldset
            className={`${styles.inputWrapper} ${
                variant === 'primary' ? styles.primary : styles.secondary
            }`}
        >
            {children}
        </fieldset>
    );
};

export default Fieldset;
