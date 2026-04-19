import { useState } from "react";
import { exampleTracks, type Track } from "../data/track";

const useTracks = () => {
  // state-ek a hook elepjén
  const [tracks, setTracks] = useState(exampleTracks);

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
