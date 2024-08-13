export default function List({ tasks, deleteTask, handleIsCompleted }) {
  return (
    <div className="tasks-list pb-10">
      <h3 className="text-3xl mb-4 font-medium">Here's what you've added⬇️</h3>
      <ul>
        {tasks.map((task) => (
          <li className="text-2xl mb-4" key={task.id}>
            <span className={task.isCompleted ? "line-through" : ""}>
              🆕 {task.task}
            </span>
            <button
              onClick={() => handleIsCompleted(task.id)}
              className="text-lg uppercase text-white rounded-lg bg-green-500 p-1.5 ml-3"
            >
              Completed
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-lg uppercase text-white rounded-lg bg-red-500 p-1.5 ml-3"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
