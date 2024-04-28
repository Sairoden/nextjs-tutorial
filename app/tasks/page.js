// COMPONENTS
import { TaskForm, TaskList } from "../../components";

export default async function TasksPage() {
  return (
    <div className="max-w-lg">
      <TaskForm />
      <TaskList />
    </div>
  );
}
