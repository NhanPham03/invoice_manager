import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get("name");
  const email = formData.get("email");
}