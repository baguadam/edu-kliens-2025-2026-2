import type { SelectChangeEvent } from "@mui/material";
import { useState } from "react";

type Genre = "rock" | "pop" | "soundtrack" | "alternative";
type Rating = "1" | "2" | "3" | "4" | "5";

interface FormValues {
  title: string;
  artist: string;
  genre: Genre;
  rating: Rating;
  isFavorite: boolean;
}

const useForm = (initialState: FormValues) => {
  const [formState, setFormState] = useState<FormValues>(initialState);

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent,
  ) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormState({ ...formState, isFavorite: checked });
  };

  return { formState, handleInput, handleCheck };
};

export default useForm;
