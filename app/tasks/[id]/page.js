// NEXT
import Link from "next/link";

// COMPONENTS
import { EditForm } from "@/components";

// UTILS
import { getTask } from "@/utils/actions";

export default async function SingleTaskPage({ params }) {
  const task = await getTask(params.id);

  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          Back to tasks
        </Link>
      </div>

      <EditForm task={task} />
    </>
  );
}
