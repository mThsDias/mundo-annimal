import styles from './CardSlider.module.css';

interface CardSliderProps {
  children: React.ReactNode;
}

const CardSlider = ({ children }: CardSliderProps) => {
  return <div className={styles.cardSlider}>{children}</div>;
};

export default CardSlider;
