import { NextResponse } from "next/server";
import { findUserById, publicUser } from "@/lib/users";
import { userIdFromRequest } from "@/lib/userSession";

export async function GET(request) {
  const user = await findUserById(userIdFromRequest(request));
  return NextResponse.json({ user: publicUser(user) });
}
