import SVGExam from '../../../shared/icons/SVGExam';
import styles from './InsideCardSlider.module.css';

interface InsiderCardSliderProps {
  title: string;
  text: string;
  span: string;
  button: string;
}

const InsideCardSlider = ({
  title,
  text,
  span,
  button,
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
        <SVGExam width={65} height={65} />
      </div>
    </div>
  );
};

export default InsideCardSlider;
