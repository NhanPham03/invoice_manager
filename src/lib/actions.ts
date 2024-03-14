function signIn(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (username == "admin") {
    if (password == "123") {
      console.log("login success");
      return "/";
    }
    else {
      const error = "LoginFailed";
      throw error;
    }
  }
  else {
    const error = "LoginFailed";
    throw error;
  }
}

export async function authenticate(formData: FormData) {
  try {
      await signIn(formData);
  } catch (error) {
      if (error) {
          switch (error) {
              case 'LoginFailed':
                  return 'Invalid credentials.';
              default:
                  return 'Something went wrong.';
          }
      }
      throw error;
  }
}