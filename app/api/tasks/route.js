// UTILS
import db from "@/utils/db";

export const GET = async req => {
  const tasks = await db.task.findMany();

  return Response.json({ tasks });
};
