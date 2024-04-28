// UTILS
import { createTaskCustom } from "@/utils/actions";

export default function TaskForm() {
  return (
    <form action={createTaskCustom}>
      <div className="join w-full">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full join-item"
          name="content"
          required
        />

        <button type="submit" className="uppercase btn btn-primary join-item">
          Create Task
        </button>
      </div>
    </form>
  );
}
