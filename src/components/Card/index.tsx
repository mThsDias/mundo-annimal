import styles from './Card.module.css';
import { PiClockCountdownBold } from 'react-icons/pi';
import { TbBuildingHospital } from 'react-icons/tb';
import { FaUserDoctor } from 'react-icons/fa6';

const Card = () => {
  return (
    <div className={styles.card}>
      <div>
        <h2>
          <PiClockCountdownBold />
          Atendimento <br />
          24h
        </h2>
        <span style={{ color: '#1f2130' }}>
          Oferecemos tratamento completo e suporte aos animais internados, com
          acompanhamento 24 horas por dia.
        </span>
      </div>
      <div>
        <h2>
          <TbBuildingHospital />
          Internação
        </h2>
        <span>
          Realizamos todo tratamento e suporte aos animais internados,
          realizando acompanhamento 24h por dia, priorizando o bem estar e
          qualidade de vida do seu pet.
        </span>
      </div>
      <div>
        <h2>
          <FaUserDoctor />
          Especialidade
        </h2>
        <span>
          Em nossa equipe temos Médicos Veterinários que atendem e se dedicam em
          diversas Especialidades Veterinárias, como:
        </span>
      </div>
    </div>
  );
};

export default Card;
