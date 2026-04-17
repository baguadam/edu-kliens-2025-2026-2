import type { SelectChangeEvent } from "@mui/material";
import { useState } from "react";

type Genre = "rock" | "pop" | "soundtrack" | "alternative";
type Rating = "1" | "2" | "3" | "4" | "5";

export interface FormValues {
  title: string;
  artist: string;
  genre: Genre;
  rating: Rating;
  isFavorite: boolean;
}

const useForm = (initialValues: FormValues) => {
  const [formState, setFormState] = useState<FormValues>(initialValues);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSelect = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormState({ ...formState, [name]: checked });
  };

  return { formState, handleInput, handleSelect, handleCheck };
};

export default useForm;
