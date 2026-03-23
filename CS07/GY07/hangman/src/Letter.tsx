import cn from "classnames";

interface LetterProps {
  missing: boolean;
  visible: boolean;
  children: React.ReactNode;
}

const Letter = ({ missing, visible, children }: LetterProps) => (
  <span className={cn({ hianyzo: missing })}>{visible && children}</span>
);

export default Letter;
