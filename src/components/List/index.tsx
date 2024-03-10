import { useState, useEffect } from "react";
import { PhotoData } from "../../types";
import { handler } from "../../utils";
import Image from "../Image";
import styles from "./list.module.scss";

const List = () => {
  const [listOfImgs, setListOfImgs] = useState<PhotoData[]>([]);

  useEffect(() => {
    handler(setListOfImgs);
  }, []);

  return (
    <div className={styles.wrapper}>
      {listOfImgs.map((elem: PhotoData) => (
        <Image elem={elem} />
      ))}
    </div>
  );
};

export default List;
