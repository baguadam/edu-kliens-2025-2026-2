import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import type { Track } from "../data/track";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import TrackContext from "../contexts/TrackContext";

interface Props {
  track: Track;
}

export function TrackDetails({ track }: Props) {
  const tracks = useContext(TrackContext);
  console.log(tracks);

  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid",
        borderColor: "rgba(148, 163, 184, 0.2)",
        background: "rgba(15, 23, 42, 0.5)",
      }}
    >
      <CardContent>
        <Stack spacing={1.2}>
          <Typography variant="h5">{track.title}</Typography>
          <Typography color="text.secondary">{track.artist}</Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
            <Chip
              label={`Length: ${track.length}`}
              size="small"
              color="primary"
              variant="outlined"
            />
            <Chip
              label={`Rating: ${track.rating}/5`}
              size="small"
              color="secondary"
              variant="outlined"
            />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
