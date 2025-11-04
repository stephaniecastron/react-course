import type { SelectorOptionProps } from './SelectorOption.model';

const SelectorOption = ({ label, value, ...rest }: SelectorOptionProps) => {
    return (
        <option value={value} {...rest}>
            {label}
        </option>
    );
};

export default SelectorOption;
