import LinkMenu from '../LinkMenu';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import { FiMenu, FiXCircle } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [toggle, setToggle] = useState(true);

  function toggleMenu() {
    setToggle(!toggle);
  }

  return (
    <header className={styles.header}>
      <div></div>
      <Link to={'/'}>
        <img
          src={logo}
          alt="Logo do site, Mundo Annimal"
          width={182}
          height={72}
        />
      </Link>
      <nav onClick={toggleMenu}>
        {toggle ? (
          <FiMenu fontSize={42} />
        ) : (
          <ul>
            <LinkMenu url="/">Início</LinkMenu>
            <LinkMenu url="sobre">Sobre</LinkMenu>
            <LinkMenu url="">Serviços</LinkMenu>
            <LinkMenu url="">Contato</LinkMenu>
            <FiXCircle fontSize={52} />
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
