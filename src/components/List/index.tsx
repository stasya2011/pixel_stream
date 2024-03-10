import { useState, useEffect } from "react";
import { PhotoData } from "../../types";
import { fetchingData } from "../../utils";
import Image from "../Image";
import styles from "./list.module.scss";

const List = () => {
  const [listOfImgs, setListOfImgs] = useState<PhotoData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("pixel_stream")) {
      const data = localStorage.getItem("pixel_stream");
      const photos = data ? JSON.parse(data) : null;
      if (photos && Array.isArray(photos)) {
        setListOfImgs(photos);
      }
      return;
    } else {
      fetchingData(setListOfImgs, setFetching, listOfImgs, currentPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (fetching) {
      fetchingData(setListOfImgs, setFetching, listOfImgs, currentPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e: Event) => {
    const target = e.target as Document;
    if (
      target.documentElement.scrollHeight -
        (target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      {listOfImgs.map((elem: PhotoData) => (
        <Image elem={elem} />
      ))}
    </div>
  );
};

export default List;
