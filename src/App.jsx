import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

export default function App() {
  /* tasks to display */
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([task, ...tasks]);
  }

  function deleteTask(id) {
    const newArray = tasks.filter((task) => id !== task.id);
    setTasks(newArray);
  }

  function handleIsCompleted(id) {
    const newArray = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(newArray);
  }

  const totalTasks = tasks.length;

  /* acc è il risultsto ottenuto dall'operazione nell'iterazione precedente, task è l'elemento dell'array processato */
  /* il ,0 è il secondo argomento del metodo reduce, che setta il valore iniziale di acc */
  let completedTasks = tasks.reduce((acc, task) => {
    return acc + (task.isCompleted ? 1 : 0);
  }, 0);

  return (
    <div className="container mx-auto">
      <AppHeader />
      <main>
        <Form addTask={addTask} />

        <List
          tasks={tasks}
          deleteTask={deleteTask}
          handleIsCompleted={handleIsCompleted}
        />
      </main>

      {/* potrei calcolare direttamente totalTasks e completedTasks nel componente e passare come prop items */}
      <AppFooter totalTasks={totalTasks} completedTasks={completedTasks} />
    </div>
  );
}
