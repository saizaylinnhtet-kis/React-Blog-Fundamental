import { FaUserCircle } from "react-icons/fa";

type UserCardProps = {
    index: number;
    people: string;
};

const UserCard = ({index, people}: UserCardProps) => {
  return (
    <div className="flex items-center justify-between">
        <section className="flex items-center">
            <FaUserCircle className="text-2xl text-gray-400" />
            <span>{people.name}</span>
        </section>
        <button>{people.following ? "Following":"Follow"}</button>
    </div>
  )
}

export default UserCard