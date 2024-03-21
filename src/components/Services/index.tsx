import styles from './Services.module.css';
import { Slider, SliderProps, Slide } from '../Slider/index';

const Services = () => {
  const settings: SliderProps = {
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    speed: 1500,
  };

  return (
    <section className={styles.services}>
      <h3>Serviço</h3>
      <p>
        Dispomos de diversos serviços para o cuidado do seu PET, com toda
        infraestrutura necessária, profissionais preparados e muito carinho.
      </p>
      <div>
        <Slider settings={settings}>
          <Slide>
            <h1>OI</h1>
          </Slide>
        </Slider>
      </div>
    </section>
  );
};

export default Services;
