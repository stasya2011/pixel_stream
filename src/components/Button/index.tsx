import styles from "./button.module.scss";

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: string;
}) => {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
