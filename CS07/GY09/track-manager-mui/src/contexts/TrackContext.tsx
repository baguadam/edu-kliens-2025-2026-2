import { createContext } from "react";
import type { Track } from "../data/track";

interface TrackContextType {
  tracks: Track[];
  addTrack: (track: Track) => void;
  removeTrack: (id: string) => void;
}

export const TrackContext = createContext<TrackContextType | null>(null);
