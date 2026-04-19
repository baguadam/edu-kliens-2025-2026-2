export interface TrackFormValues {
  title: string;
  artist: string;
  genre: string;
  rating: string;
}

export interface ValidatedTrackFormValues {
  title: string;
  artist: string;
  genre: string;
  rating: number; // már számként akarjuk visszaadni az értékelést
}

const VALID_GENRES = ["rock", "pop", "soundtrack", "alternative"];

export function validateTrackForm(
  values: TrackFormValues,
): ValidatedTrackFormValues | null {
  const title = values.title.trim();
  const artist = values.artist.trim();
  const rating = Number(values.rating);

  const isValidTitle = title.length >= 2;
  const isValidArtist = artist.length >= 2;
  const isValidRating = Number.isInteger(rating) && rating >= 1 && rating <= 5;
  const isValidGenre = VALID_GENRES.includes(values.genre);

  if (!isValidTitle || !isValidArtist || !isValidRating || !isValidGenre) {
    return null;
  }

  return {
    title,
    artist,
    genre: values.genre,
    rating,
  };
}
