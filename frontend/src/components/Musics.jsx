import React, { useEffect } from "react";
import Header from "./Header";
import { HomeSongContainer } from "./Home";
import { getAllSongs } from "../api";
import { actionType } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";

const Musics = () => {
  const [{ song, allSongs }, dispatch] = useStateValue();
  useEffect(() => {
    if (!allSongs) {
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.data,
        });
      });
    }
  }, []);
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Header />
      <div className="w-full h-auto flex items-center justify-evenly gap-4 flex-wrap p-6">
        <HomeSongContainer musics={allSongs} />
      </div>
    </div>
  );
};

export default Musics;
