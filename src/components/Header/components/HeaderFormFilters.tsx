import { FaLocationDot } from 'react-icons/fa6';
import SelectorGroup from '../../Selector/SelectorGroup';
import SelectorOption from '../../Selector/SelectorOption';
import { cidades } from './HeaderFormFilters.model';

const HeaderFormFilters = () => {
    return (
        <form>
            <SelectorGroup id="cidade" icon={<FaLocationDot />}>
                <SelectorOption value="" label="Selecione a cidade" />
                {cidades.map((cidade) => {
                    return (
                        <SelectorOption
                            key={cidade.id}
                            label={cidade.nome}
                            value={cidade.nome}
                        />
                    );
                })}
            </SelectorGroup>
        </form>
    );
};

export default HeaderFormFilters;
