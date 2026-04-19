import { useEffect, useState } from "react";
import { exampleTracks, type Track } from "../data/track";

const STORAGE_KEY = "tracks";

const useTracks = () => {
  // state-ek a hook elepjén
  const [tracks, setTracks] = useState<Track[]>(
    JSON.parse(localStorage.getItem(STORAGE_KEY)!) || exampleTracks,
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tracks));
  }, [tracks]);

  // műveletek
  const addTrack = (track: Track) => {
    setTracks([...tracks, track]);
  };

  const removeTrack = (id: string) => {
    setTracks(tracks.filter((track) => track.id !== id));
  };

  // return
  return { tracks, addTrack, removeTrack };
};

export default useTracks;
