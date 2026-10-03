import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { setUserStatus } from "@/lib/users";

export async function PATCH(request, { params }) {
  if (!(await isAdminRequest(request))) {
    return NextResponse.json({ error: "Потрібен вхід" }, { status: 401 });
  }
  const body = await request.json().catch(() => ({}));
  const user = await setUserStatus(params.id, body.status);
  if (!user) {
    return NextResponse.json({ error: "Користувача не знайдено" }, { status: 404 });
  }
  return NextResponse.json({ user });
}
