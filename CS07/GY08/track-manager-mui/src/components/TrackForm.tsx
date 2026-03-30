import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import useForm from "../hooks/useForm";
import type React from "react";
import type { Track } from "../data/track";
import { validateTrackForm } from "../utils/validators";
import { useState } from "react";

interface TrackFormProps {
  addTrack: (track: Track) => void;
}

export function TrackForm({ addTrack }: TrackFormProps) {
  const { formState, handleInput, handleCheck } = useForm({
    title: "",
    artist: "",
    genre: "rock",
    rating: "3",
    isFavorite: false,
  });
  const [hasError, setHasError] = useState(false);
  const isFormValid = validateTrackForm(formState) !== null;

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    const validatedValues = validateTrackForm(formState);
    if (!validatedValues) {
      setHasError(true);
      return;
    }
    setHasError(false);

    addTrack({
      id: uuidv4(), // generáltatunk egy egyedi stringet ID-ként
      title: validatedValues.title,
      artist: validatedValues.artist,
      length: "0:00",
      rating: validatedValues.rating,
      thumbnailURL:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/classic-song-mixtape-album-cover-template-design-3ba3255137894fac49ae81b1346b289e_screen.jpg?ts=1635384548",
      spotifyURL: "",
      chordsURL: "",
      lyricsURL: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Title"
          name="title"
          value={formState.title}
          onChange={handleInput}
        />
        <TextField
          label="Artist"
          name="artist"
          value={formState.artist}
          onChange={handleInput}
        />

        <FormControl fullWidth>
          <InputLabel id="track-genre-label">Genre</InputLabel>
          <Select
            labelId="track-genre-label"
            label="Genre"
            name="genre"
            value={formState.genre}
            onChange={handleInput}
          >
            <MenuItem value="rock">Rock</MenuItem>
            <MenuItem value="pop">Pop</MenuItem>
            <MenuItem value="soundtrack">Soundtrack</MenuItem>
            <MenuItem value="alternative">Alternative</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="track-rating-label">Rating</InputLabel>
          <Select
            labelId="track-rating-label"
            label="Rating"
            name="rating"
            value={formState.rating}
            onChange={handleInput}
          >
            <MenuItem value="1">1 / 5</MenuItem>
            <MenuItem value="2">2 / 5</MenuItem>
            <MenuItem value="3">3 / 5</MenuItem>
            <MenuItem value="4">4 / 5</MenuItem>
            <MenuItem value="5">5 / 5</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox checked={formState.isFavorite} onChange={handleCheck} />
          }
          label="Mark as favorite"
        />

        <Button type="submit" variant="contained" disabled={!isFormValid}>
          Add Track
        </Button>

        {hasError && !isFormValid && (
          <FormHelperText error>Invalid form data!</FormHelperText>
        )}
      </Stack>
    </form>
  );
}
