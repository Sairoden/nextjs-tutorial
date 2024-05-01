// NEXT
import { NextResponse } from "next/server";

// UTILS
import db from "@/utils/db";

export const GET = async req => {
  const tasks = await db.task.findMany();

  return NextResponse.json({ tasks });
};

export const POST = async req => {
  const { content } = await req.json();

  const task = await db.task.create({
    data: {
      content,
    },
  });

  return NextResponse.json({ task });
};
