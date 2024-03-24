import styles from './Services.module.css';
import { Slider, SliderProps, Slide } from '../Slider/index';
import CardSlider from './CardSlider';
import InsideCardSlider from './IsideCardSlider';

const Services = () => {
  const settings: SliderProps = {
    spaceBetween: 18,
    pagination: {
      clickable: true,
    },
    speed: 1000,
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
            <CardSlider>
              <InsideCardSlider
                title="Exames"
                text="Nossa clínica oferece exames precisos e modernos para garantir o bem-estar e a saúde do seu pet."
                span="20 serviços"
                button="Ver mais"
              />
            </CardSlider>
          </Slide>
          <Slide>
            <CardSlider>
              <InsideCardSlider
                title="Cirurgias"
                text="Experiência em cirurgias. Cuidando do seu pet com segurança e qualidade."
                span="30 serviços"
                button="Ver mais"
              />
            </CardSlider>
          </Slide>
          <Slide>
            <CardSlider>
              <InsideCardSlider
                title="Acupuntura"
                text="Experiência em acupuntura. Cuidando do seu pet com técnica e dedicação."
                span="10 serviços"
                button="Ver mais"
              />
            </CardSlider>
          </Slide>
          <Slide>
            <CardSlider>
              <InsideCardSlider
                title="Internação"
                text="Internação especializada. Cuidamos do seu pet com atenção e carinho."
                span="1 serviços"
                button="Ver mais"
              />
            </CardSlider>
          </Slide>
          <Slide>
            <CardSlider>
              <InsideCardSlider
                title="Atendimento 24h"
                text="Atendimento 24 horas. Dedicação total ao seu pet."
                span="1 serviços"
                button="Ver mais"
              />
            </CardSlider>
          </Slide>
          <Slide>
            <CardSlider>
              <InsideCardSlider
                title="Vacinas"
                text="Proteção garantida. Vacinação completa para o seu pet."
                span="10 serviços"
                button="Ver mais"
              />
            </CardSlider>
          </Slide>
        </Slider>
      </div>
    </section>
  );
};

export default Services;
