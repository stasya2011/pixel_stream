import { PhotoData } from "../../types";
import BlurComponent from "../BlurComponent";
import styles from "./image.module.scss";

const Image = ({ elem }: { elem: PhotoData }) => {
  return (
    <div key={elem.id} className={styles.wrapper}>
      <img className={styles.img} src={elem.src.tiny} alt={elem.alt} />
      <BlurComponent author={elem.photographer} title={elem.alt} />
    </div>
  );
};

export default Image;
