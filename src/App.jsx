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
      task.id === id ? { ...task, isCompleted: true } : task
    );

    setTasks(newArray);
  }

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

      <AppFooter />
    </div>
  );
}
