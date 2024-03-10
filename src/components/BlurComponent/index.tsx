import Button from "../Button";
import Title from "../Title";
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
      <Title style={{ fontWeight: "800" }}>{title ? title : "No title"}</Title>
      <div style={{ border: "1px solid white", width: 80 }} />
      <Title style={{ fontStyle: "italic" }}>{author}</Title>
      <Button onClick={() => console.log("click")}>Favourite</Button>
    </div>
  );
};

export default BlurComponent;
