export default function List({
  tasks,
  deleteTask,
  handleIsCompleted,
  clearList,
}) {
  /* metto le tasks completate alla fine della lista */
  const sortedTasks = tasks
    .slice()
    .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));

  return (
    <div className="tasks-list pb-10">
      <h3 className="text-3xl mb-4 font-medium">Here's what you've added⬇️</h3>
      <ul>
        {sortedTasks.map((task) => (
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
      {sortedTasks.length > 0 && (
        <div className="text-center">
          <button
            onClick={clearList}
            className="uppercase bg-sky-300 text-white p-2 font-medium text-lg rounded-lg"
          >
            clear
          </button>
        </div>
      )}
    </div>
  );
}
