import { useDispatch, useSelector } from "react-redux";
import styles from "./Editor.module.css";
import { addHaikuSlice, changeEditorSlice, selectEditor } from "./haikuSlice";

export const Editor = () => {
  // useDispatch
  // useSelector
  // dispatch(addHaiku("Csodás ez a nap!"));
  const dispatch = useDispatch();
  const editor = useSelector(selectEditor);

  const isHaiku = false;
  return (
    <div>
      <textarea
        value={editor}
        rows={4}
        cols={40}
        className={isHaiku ? styles.correct : styles.wrong}
        onChange={(e) => dispatch(changeEditorSlice(e.target.value))}
      ></textarea>
      <p>Vowels per row: 1,2,3</p>
      <button onClick={() => dispatch(addHaikuSlice(editor))}>Add</button>
      <button>Save</button>
    </div>
  );
};
