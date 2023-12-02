import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import useFlexStyles from '../../UI/Flex/useFlexStyles';

function Navigation() {
  const flex = useFlexStyles({ justify: 'center', gap: 20, wrap: true });
  return (
    <nav>
      <ul className={styles.navList} style={flex}>
        <li>
          <NavLink to="/main">Main</NavLink>
        </li>
        <li>
          <NavLink to="/controlled">Controlled Form</NavLink>
        </li>
        <li>
          <NavLink to="/uncontrolled">Uncontrolled Form</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
