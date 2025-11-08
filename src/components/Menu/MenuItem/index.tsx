import Link from '../../Link';
import type { MenuItemProps } from './MenuItem.model';

const MenuItem = ({ children, href = '#' }: MenuItemProps) => {
    return (
        <li>
            <Link href={href}>{children}</Link>
        </li>
    );
};

export default MenuItem;
