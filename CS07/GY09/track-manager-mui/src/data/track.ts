export interface Track {
  id: string;
  artist: string;
  title: string;
  length: string;
  rating: number;
  thumbnailURL: string;
  spotifyURL: string;
  chordsURL: string;
  lyricsURL: string;
}

export const exampleTracks: Track[] = [
  {
    id: "21",
    artist: "Hiperkarma",
    title: "Zöld Pardon",
    length: "3:25",
    rating: 5,
    thumbnailURL:
      "https://www.a38.hu/storage/app/uploads/public/63c/6b6/5c4/thumb_158764_480_270_0_0_auto.jpg",
    spotifyURL: "https://open.spotify.com/track/45y3Qz003zQ/maxresdefault.jpg",
    chordsURL:
      "https://tabs.ultimate-guitar.com/tab/hiperkarma/ebredj-fel-chords-17254",
    lyricsURL: "https://www.azlyrics.com/lyrics/hiperkarma/ebredjfel.html",
  },
  {
    id: "22",
    artist: "Hiperkarma",
    title: "Falon Túl",
    length: "3:10",
    rating: 5,
    thumbnailURL:
      "https://www.a38.hu/storage/app/uploads/public/63c/6b6/5c4/thumb_158764_480_270_0_0_auto.jpg",
    spotifyURL: "https://open.spotify.com/track/45y3Qz003zQ/maxresdefault.jpg",
    chordsURL:
      "https://tabs.ultimate-guitar.com/tab/hiperkarma/budai-hegyek-chords-17255",
    lyricsURL: "https://www.azlyrics.com/lyrics/hiperkarma/budaihegyek.html",
  },
  {
    id: "23",
    artist: "Carson Coma",
    title: "Legjobb verzió",
    length: "3:20",
    rating: 5,
    thumbnailURL:
      "https://szentendre.hu/wp-content/uploads/2019/11/CarsonComa_4_komroczkidia.jpg",
    spotifyURL: "https://open.spotify.com/track/45y3Qz003zQ/maxresdefault.jpg",
    chordsURL:
      "https://tabs.ultimate-guitar.com/tab/carsoncoma/a-te-hibad-chords-17256",
    lyricsURL: "https://www.azlyrics.com/lyrics/carsoncoma/atehibad.html",
  },
  {
    id: "24",
    artist: "Carson Coma",
    title: "Immunissá válunk",
    length: "9:20",
    rating: 5,
    thumbnailURL:
      "https://szentendre.hu/wp-content/uploads/2019/11/CarsonComa_4_komroczkidia.jpg",
    spotifyURL: "https://open.spotify.com/track/45y3Qz003zQ/maxresdefault.jpg",
    chordsURL:
      "https://tabs.ultimate-guitar.com/tab/carsoncoma/most-elsz-chords-17257",
    lyricsURL: "https://www.azlyrics.com/lyrics/carsoncoma/mostelsz.html",
  },
  {
    id: "25",
    artist: "Carson Coma",
    title: "Kék Hullám Kemping",
    length: "3:32",
    rating: 5,
    thumbnailURL:
      "https://szentendre.hu/wp-content/uploads/2019/11/CarsonComa_4_komroczkidia.jpg",
    spotifyURL: "https://open.spotify.com/track/45y3Qz003zQ/maxresdefault.jpg",
    chordsURL:
      "https://tabs.ultimate-guitar.com/tab/hiperkarma/maradj-velem-chords-17258",
    lyricsURL: "https://www.azlyrics.com/lyrics/hiperkarma/maradjvelem.html",
  },
  {
    id: "26",
    artist: "Hiperkarma",
    title: "Hiperkarma",
    length: "3:32",
    rating: 5,
    thumbnailURL:
      "https://www.a38.hu/storage/app/uploads/public/63c/6b6/5c4/thumb_158764_480_270_0_0_auto.jpg",
    spotifyURL: "https://open.spotify.com/track/45y3Qz003zQ/maxresdefault.jpg",
    chordsURL:
      "https://tabs.ultimate-guitar.com/tab/hiperkarma/maradj-velem-chords-17258",
    lyricsURL: "https://www.azlyrics.com/lyrics/hiperkarma/maradjvelem.html",
  },
];
