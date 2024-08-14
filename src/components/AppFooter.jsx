export default function AppFooter({ totalTasks, completedTasks }) {
  return (
    <footer className="bg-sky-300 text-blue-500 p-5 mb-10">
      <h4 className="text-center font-medium text-2xl">
        You have {totalTasks} total tasks, and you have completed{" "}
        {completedTasks} of them
      </h4>
    </footer>
  );
}
