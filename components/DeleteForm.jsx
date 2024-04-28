"use client";

// REACT
import { useFormStatus } from "react-dom";

// UTILS
import { deleteTask } from "@/utils/actions";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-xs btn-error" disabled={pending}>
      {pending ? "Pending...." : "Delete"}
    </button>
  );
};

export default function DeleteForm({ id }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitBtn />
    </form>
  );
}
