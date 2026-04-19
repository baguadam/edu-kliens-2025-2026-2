import useTracks from "../hooks/useTracks";
import TrackContext from "./TrackContext";

interface TrackProviderProps {
  children: React.ReactNode;
}

const TrackProvider = ({ children }: TrackProviderProps) => {
  const tracks = useTracks();

  return (
    <TrackContext.Provider value={tracks}>{children}</TrackContext.Provider>
  );
};

export default TrackProvider;
