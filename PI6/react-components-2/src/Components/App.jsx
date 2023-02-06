import NumberList from "./NumberList";
import UserCard from "./UserCard";
import {v4 as uuid} from 'uuid';

const users = [
  {
    id:uuid(),
    name: "John Doe",
    title: "Front End developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    description: "Lorem ....",
  },
  {
    id:uuid(),
    name: "Nancy Smith",
    title: "Back End developer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    description: "Lorem ....",
  },
  {
    id:uuid(),
    name: "Mike Doe",
    title: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    description: "Lorem ....",
  },
  {
    id:uuid(),
    name: "Nancy Smith",
    title: "Back End developer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    description: "Lorem ....",
  },
  {
    id:uuid(),
    name: "Mike Doe",
    title: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    description: "Lorem ....",
  },
];

const numbers = [1,2,3,4,5,6]

function App() {
  return (
    <main className="container mt-5">
      <div className="row">
        { users.map((user) => <UserCard user={user} key={user.id}/>) }
      </div>
    </main>

    // <NumberList numbers={numbers}/>
  );
}

export default App;
