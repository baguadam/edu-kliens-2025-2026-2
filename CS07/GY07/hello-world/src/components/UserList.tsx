import type { User } from "../data/users";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  return (
    <>
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </>
  );
};

export default UserList;
