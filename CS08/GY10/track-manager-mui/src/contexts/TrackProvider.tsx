import useTracks from "../hooks/useTracks";
import { TrackContext } from "./TrackContext";

interface TrackProviderProps {
  children: React.ReactNode;
}

// Wrapper komponens. Ide emeltük ki az adatot a useTracks custom hookból.
const TrackProvider = ({ children }: TrackProviderProps) => {
  const trackData = useTracks();
  return (
    <TrackContext.Provider value={trackData}>{children}</TrackContext.Provider>
  );
};

export default TrackProvider;
