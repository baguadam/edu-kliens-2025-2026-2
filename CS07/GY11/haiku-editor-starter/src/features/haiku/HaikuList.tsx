import { useDispatch, useSelector } from "react-redux";
import { changeIndex, selectHaikus, selectIndex } from "./haikuSlice";
import styles from "./HaikuList.module.css";

export const HaikuList = () => {
  const haikus = useSelector(selectHaikus);
  const selectedIndex = useSelector(selectIndex);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Haiku list</h2>
      <div>
        {haikus.map((haiku, i) => (
          <pre
            className={selectedIndex === i ? styles.selected : ``}
            onClick={() => dispatch(changeIndex(i))}
            key={i}
          >
            {haiku}
          </pre>
        ))}
      </div>
    </div>
  );
};
