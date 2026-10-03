import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { listUsers } from "@/lib/users";

export async function GET(request) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  const users = await listUsers();
  return NextResponse.json({ count: users.length, users });
}
