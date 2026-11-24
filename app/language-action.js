"use server";

import { cookies } from "next/headers";

export async function switchLanguage(formData) {
  const language = formData.get("language");
  if (language !== "en" && language !== "id") return;

  (await cookies()).set("site-language", language, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
}
