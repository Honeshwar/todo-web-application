import { Navbar, Footer, Task } from "../../components";
import "./Home.scss";
export default function Home() {
  const tasks = [
    {
      id: 1,
      desc: "i walk around",
      completed: false,
    },
    {
      id: 2,
      desc: "i wakeup around",
      completed: false,
    },
    {
      id: 3,
      desc: "i run around",
      completed: false,
    },
    {
      id: 1,
      desc: "i walk around",
      completed: false,
    },
    {
      id: 2,
      desc: "i wakeup around",
      completed: false,
    },
    {
      id: 3,
      desc: "i run around",
      completed: false,
    },
    {
      id: 1,
      desc: "i walk around",
      completed: false,
    },
    {
      id: 2,
      desc: "i wakeup around",
      completed: false,
    },
    {
      id: 3,
      desc: "i run around",
      completed: false,
    },
    {
      id: 1,
      desc: "i walk around",
      completed: false,
    },
    {
      id: 2,
      desc: "i wakeup around jkhgfgdfgjhkgftdhfjgkhkgjyfdrgsgfcgvbvftcdx vctyxrtgf hgvct vctyf g",
      completed: false,
    },
    {
      id: 3,
      desc: "i run around",
      completed: false,
    },
    {
      id: 1,
      desc: "i walk around",
      completed: false,
    },
    {
      id: 2,
      desc: "i wakeup around",
      completed: false,
    },
    {
      id: 3,
      desc: "i run around",
      completed: false,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="homepage">
        {/* <div className="todo"> */}
        <div className="top">
          <form>
            <input type="text" placeholder="Write your task..." required />
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </form>
        </div>

        <div className="bottom">
          {tasks?.map((task) => (
            <Task task={task} key={task.id} />
          ))}
          {tasks?.length === 0 && <span>Tasks will be display here</span>}
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
}
