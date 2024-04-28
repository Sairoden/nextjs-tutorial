"use client";

// UTILS
import { createTaskCustom } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="uppercase btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "please wait..." : "Create Task"}
    </button>
  );
};

const initialState = {
  message: null,
};

export default function TaskFormCustom() {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  return (
    <form action={formAction}>
      {state.message ? <p className="mb-2">{state.message}</p> : null}
      <div className="join w-full">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full join-item"
          name="content"
          required
        />

        <SubmitBtn />
      </div>
    </form>
  );
}
