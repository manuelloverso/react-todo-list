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

  return (
    <div className="container mx-auto">
      <AppHeader />
      <main>
        <Form addTask={addTask} />

        <List tasks={tasks} />
      </main>

      <AppFooter />
    </div>
  );
}
