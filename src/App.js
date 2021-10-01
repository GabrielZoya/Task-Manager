import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Turno Vacuna Covid",
      day: "30/09/2021 a las 12:00 ",
      reminder: true,
    },
    {
      id: 2,
      text: "Parcial",
      day: "30/09/2021 a las 12:00 ",
      reminder: true,
    },
    {
      id: 3,
      text: "Cumpleaños",
      day: "30/09/2021 a las 12:00 ",
      reminder: true,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title="Task Manager" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
