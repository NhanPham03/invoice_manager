import { loginFormBodyType } from "../schema/auth.schema";

export const login = async (data: loginFormBodyType) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-view/sign-in/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res) {
      throw new Error("Login failed");
    }

    const tokens = await res.json();

    console.log(tokens);
    return tokens;
  } catch (error) {
    console.error("Login ERROR:", error);
    throw error;
  }
};