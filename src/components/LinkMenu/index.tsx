import { Link } from 'react-router-dom';
import styles from './LinkMenu.module.css';

interface LinkProps {
  url: string;
  children: React.ReactNode;
}

const LinkMenu = ({ url, children }: LinkProps) => {
  return (
    <li className={styles.link}>
      <Link to={url}>{children}</Link>
    </li>
  );
};

export default LinkMenu;
