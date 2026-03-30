import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  type SxProps,
  Stack,
  type Theme,
  Typography,
} from "@mui/material";
import { TrackList } from "./components/TrackList";
import { TrackForm } from "./components/TrackForm";
import { TrackDetails } from "./components/TrackDetails";
import { type Track } from "./data/track";
import { useState } from "react";
import useTracks from "./hooks/useTracks";

const panelSx: SxProps<Theme> = {
  p: { xs: 1.5, md: 2.5 },
  border: "1px solid",
  borderColor: "rgba(148, 163, 184, 0.2)",
  backgroundColor: "rgba(17, 24, 39, 0.8)",
  backdropFilter: "blur(8px)",
};

function App() {
  const { tracks, addTrack, removeTrack } = useTracks();
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  // handlers
  const handleCardClick = (track: Track) => {
    setSelectedTrack(track);
  };

  const handleRemoveClick = (id: string) => {
    // csak akkor vegyük le a "details" részt, ha a törlendő track az éppen megjelenített,
    // tehát: van selectedTrack és annak az id-ja megegyezik a törlendővel
    if (selectedTrack && selectedTrack.id === id) {
      setSelectedTrack(null);
    }
    removeTrack(id);
  };

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        background:
          "radial-gradient(circle at 5% 5%, rgba(94, 234, 212, 0.15), transparent 35%), radial-gradient(circle at 95% 0%, rgba(245, 158, 11, 0.15), transparent 30%), #070b14",
        py: { xs: 2.5, md: 4 },
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          px: { xs: 1.5, sm: 2, md: 3, lg: 4 },
        }}
      >
        <Stack spacing={2.5}>
          <Box>
            <Typography variant="h4">Track Manager</Typography>
          </Box>

          <Grid container spacing={2.5}>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Paper elevation={0} sx={panelSx}>
                <Typography variant="h6" sx={{ mb: 1.5 }}>
                  Library
                </Typography>
                <TrackList
                  tracks={tracks}
                  onClick={handleCardClick}
                  onDelete={handleRemoveClick}
                />
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, lg: 4 }}>
              <Stack spacing={2.5}>
                {selectedTrack && (
                  <Paper elevation={0} sx={panelSx}>
                    <Typography variant="h6" sx={{ mb: 1.5 }}>
                      Track Details
                    </Typography>
                    <TrackDetails track={selectedTrack} />
                  </Paper>
                )}

                <Divider sx={{ borderColor: "rgba(148, 163, 184, 0.2)" }} />

                <Paper elevation={0} sx={panelSx}>
                  <Typography variant="h6" sx={{ mb: 1.5 }}>
                    Add New Track
                  </Typography>
                  <TrackForm addTrack={addTrack} />
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
