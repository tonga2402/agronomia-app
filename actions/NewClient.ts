"use server";

export const login = async (formData: FormData) => {
  const res = await fetch(`${process.env.URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      formData,
    }),
  });
  const newClient = await res.json();

  if (res.ok) {
  } else if (res.status === 401) {
    return { message: "" };
  }

  return { message: "Intente mas Tarde" };
};
