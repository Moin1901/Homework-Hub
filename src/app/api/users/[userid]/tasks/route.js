// localhost:3000/api/users/[userId]/tasks

import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
connectDb();

export async function GET(request, { params }) {
  const { userid } = params;

  try {
    // get user using id

    const tasks = await Task.find({
      userId: userid,
    });
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to get tasks", 404, false);
  }
}
