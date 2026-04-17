import useTracks from "../hooks/useTracks";
import { TrackContext } from "./TrackContext";

interface TrackProviderProps {
  children: React.ReactNode;
}

const TrackProvider = ({ children }: TrackProviderProps) => {
  const trackData = useTracks();
  return (
    <TrackContext.Provider value={trackData}>{children}</TrackContext.Provider>
  );
};

export default TrackProvider;
