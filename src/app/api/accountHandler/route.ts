import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const username = formData.get("username");
  const password = formData.get("password");

  return NextResponse.json({ 
    data: {
      'username': username,
      'password': password,
    },
  }, 
  { 
    status: 200, 
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function PUT(req: NextRequest) {
  const formData = await req.formData();

  const username = formData.get("username");
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword =   formData.get("confirm_password");

  return NextResponse.json({
    data: {
      'username': username,
      'first_name': firstName,
      'last_name': lastName,
      'email': email,
      'password': password,
    },
  },
  {
    status: (password == confirmPassword) ? 200 : 400,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}