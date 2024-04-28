// COMPONENTS
import { TaskFormCustom, TaskList } from "../../components";

export default async function TasksPage() {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TaskList />
    </div>
  );
}
