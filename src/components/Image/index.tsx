import { PhotoData } from "../../types";
import styles from "./image.module.scss";

const Image = ({ elem }: { elem: PhotoData }) => {
  return (
    <div key={elem.id}>
      <img className={styles.wrapper} src={elem.src.tiny} alt={elem.alt} />
    </div>
  );
};

export default Image;
