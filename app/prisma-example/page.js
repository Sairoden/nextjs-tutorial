// UTILS
import prisma from "@/utils/db";

const prismaHandlers = async () => {
  console.log("Prisma example");
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return allTasks;
};

export default async function PrismaPage() {
  const tasks = await prismaHandlers();

  if (tasks.length === 0)
    return <h2 className="mt-2 font-medium text-lg">No tasks to show...</h2>;

  return (
    <div>
      <h1>PrismaPage</h1>
      {tasks.map(task => (
        <h2 key={task.id} className="text-xl py-2">
          😁 {task.content}
        </h2>
      ))}
    </div>
  );
}
