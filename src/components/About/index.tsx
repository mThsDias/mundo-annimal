import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div>
        <h3>
          Conheça um <br /> pouco sobre nós
        </h3>
        <p>
          Na Clínica Mundo Animal, nossa tradição de excelência é tão antiga
          quanto a confiança que depositam em nós. Há mais de 5 anos, oferecemos
          cuidados veterinários excepcionais, com atendimento 24 horas para
          garantir suporte constante aos nossos pacientes e seus tutores.
        </p>
        <p>
          Como pioneiros em cuidados veterinários inovadores, continuamos a
          evoluir e aprimorar nossos serviços para atender às necessidades em
          constante mudança dos nossos amigos peludos.
        </p>
        <p>
          Venha nos conhecer e descubra por que tantas famílias confiam na
          Clínica Mundo Animal. Cada ano que passa, fortalecemos nosso
          compromisso de fornecer o melhor atendimento possível. Porque para
          nós, cada animal importa. Conheça um pouco mais sobre nós hoje mesmo.
        </p>
      </div>
      <button>Saiba mais</button>
    </section>
  );
};

export default About;
