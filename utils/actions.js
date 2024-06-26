"use server";

// NEXT
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// LIBRARIES
import { z } from "zod";

// UTILS
import prisma from "./db";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTaskCustom = async (prevState, formData) => {
  const content = formData.get("content");
  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    Task.parse({ content });

    await prisma.task.create({
      data: {
        content,
      },
    });

    revalidatePath("/tasks");
    return { message: "success" };
  } catch (err) {
    console.log(err);
    return { message: "error" };
  }
};

export const getTask = async id => {
  return prisma.task.findUnique({
    where: { id },
  });
};

export const editTask = async formData => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: { id },
    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });

  redirect("/tasks");
};

export const deleteTask = async formData => {
  const id = formData.get("id");

  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/tasks");
};
