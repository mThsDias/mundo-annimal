import styles from './Banner.module.css';

interface ImagemProps {
  img: string;
}

const Banner = ({ img }: ImagemProps) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url('${img}')` }}
    ></div>
  );
};

export default Banner;
