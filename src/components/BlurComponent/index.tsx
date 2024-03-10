import Button from "../Button";
import styles from "./blurComponent.module.scss";

const BlurComponent = ({
  author,
  title,
}: {
  author: string;
  title: string;
}) => {
  return (
    <div className={styles["wrapper"]}>
      <h2>{title ? title : "No title"}</h2>
      <h2>{author}</h2>
      <Button onClick={() => console.log("click")}>Favourite</Button>
    </div>
  );
};

export default BlurComponent;
