// COMPONENTS
import { TaskFormCustom, TaskList } from "../../components";

export const dynamic = "force-dynamic";

export default async function TasksPage() {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TaskList />
    </div>
  );
}
