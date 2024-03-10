import styles from "./title.module.scss";

const Title = ({
  children,
  style,
}: {
  children: string;
  style?: { [key: string]: string };
}) => {
  return (
    <p className={styles.wrapper} style={{ ...style }}>
      {children}
    </p>
  );
};

export default Title;
