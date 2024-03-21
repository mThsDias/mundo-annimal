import styles from './InsideCardSlider.module.css';

interface InsiderCardSliderProps {
  title: string;
  text: string;
  span: string;
  button: string;
  svg: string;
}

const InsideCardSlider = ({
  title,
  text,
  span,
  button,
  svg,
}: InsiderCardSliderProps) => {
  return (
    <div className={styles.isiderCardSlider}>
      <div className={styles.boxDescription}>
        <h4>{title}</h4>
        <p>{text}</p>
        <span>{span}</span>
      </div>
      <div className={styles.boxButtonAndSvg}>
        <button>{button}</button>
        <img src={svg} alt="icone" />
      </div>
    </div>
  );
};

export default InsideCardSlider;
