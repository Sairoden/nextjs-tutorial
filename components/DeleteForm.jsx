// UTILS
import { deleteTask } from "@/utils/actions";

export default function DeleteForm({ id }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="btn btn-xs btn-error">
        Delete
      </button>
    </form>
  );
}
