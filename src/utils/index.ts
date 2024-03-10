import { PhotoData } from "../types";

export const fetchingData = async (
  setListOfImgs: (array: PhotoData[]) => void,
  setFetching: (value: boolean) => void,
  listOfImgs: PhotoData[],
  currentPage: number
) => {
  if (process.env.REACT_APP_API_KEY) {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=12`,
        {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
      const data = await response.json();
      setListOfImgs([...listOfImgs, ...data.photos]);
      localStorage.setItem(
        "pixel_stream",
        JSON.stringify([...listOfImgs, ...data.photos])
      );
    } finally {
      setFetching(false);
    }
  } else {
    console.log("Oooops...", process.env.REACT_APP_API_KEY);
  }
};
