export default function List({ tasks }) {
  return (
    <div className="tasks-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
}
