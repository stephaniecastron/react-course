import classNames from 'classnames';
import { tagClasses, type TagProps } from './Tag.model';
import styles from './Tag.module.css';

const Tag = ({ value }: TagProps) => {
    const classes = classNames(styles.tag, tagClasses[value]);
    return <span className={classes}>{value}</span>;
};

export default Tag;
