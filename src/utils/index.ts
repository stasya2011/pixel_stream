import { PhotoData } from "../types";

export const handler = async (setListOfImgs: (array: PhotoData[]) => void) => {
  if (process.env.REACT_APP_API_KEY) {
    const a = await fetch(
      "https://api.pexels.com/v1/curated?page=1&per_page=10",
      {
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      }
    );
    const b = await a.json();
    setListOfImgs(b.photos);
  } else {
    console.log("Oooops...", process.env.REACT_APP_API_KEY);
  }
};
