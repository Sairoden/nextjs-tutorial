"use server";

// NEXT
import { revalidatePath } from "next/cache";

// UTILS
import prisma from "./db";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async formData => {
  const content = formData.get("content");

  await prisma.task.create({
    data: {
      content,
    },
  });

  revalidatePath("/tasks");
};

export const deleteTask = async id => {
  await prisma.task.delete(id);
};
