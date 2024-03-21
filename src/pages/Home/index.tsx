import bannerImage from '../../assets/banner.jpg';
import About from '../../components/About';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Services from '../../components/Services';

import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.home}>
      <Banner img={bannerImage} />
      <div className={styles.titleDescription}>
        <h1>
          Clínica Veterinária <br /> Mundo <span>Annimal</span>
        </h1>
        <p>
          Cuidando da saúde do seu <br />
          melhor amigo <strong>24h por dia</strong>
        </p>
        <button>Agendar Consulta</button>
      </div>
      <Card />
      <About />
      <Services />
    </section>
  );
};

export default Home;
