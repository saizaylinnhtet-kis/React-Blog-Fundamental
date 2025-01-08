import UserCard from "./UserCard";

type peopleToFollow = {
    name: string;
    following: boolean;
}

const peopleToFollow: peopleToFollow[] = [
    { name: "Charlotte Blankenship", following: false },
    { name: "Naomi Joyce", following: false },
    { name: "Harris Pineda", following: true },
    { name: "Alison Glass", following: true },
];


const PeopleToFollow = () => {
  return (
    <div className="border-2 rounded-md px-4 py-2 my-4">
        <h3 className="font-semibold text-lg mb-4">People to follow</h3>
        <div className="">
            {peopleToFollow.map((people, index)=> (
                <UserCard key={index} people={people}/>
            ))}
        </div>
    </div>
  )
}

export default PeopleToFollow