import { createContext } from "react";
import type { Track } from "../data/track";

interface TrackContextData {
  tracks: Track[];
  addTrack: (track: Track) => void;
  removeTrack: (id: string) => void;
}

const TrackContext = createContext<TrackContextData | null>(null);

export default TrackContext;
