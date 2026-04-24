import { createContext } from "react";
import type { Track } from "../data/track";

// definiálom, hogy milyen adatokat szeretnék elérni a Contexten keresztül
interface TrackContextType {
  tracks: Track[];
  addTrack: (track: Track) => void;
  removeTrack: (id: string) => void;
}

// context létrehozása, kezdetben null értékkel, majd később érkezik az érték a Provideren keresztül
export const TrackContext = createContext<TrackContextType | null>(null);
