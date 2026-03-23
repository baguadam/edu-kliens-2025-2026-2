import type { User } from "../data/users";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user: { name, age, hasStrava } }: UserCardProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <p>{hasStrava ? "sportos" : "sajnos nem sportos :("}</p>
    </div>
  );
};

export default UserCard;
