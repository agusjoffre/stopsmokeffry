"use server";

export const challengeSubmit = (formData: FormData) => {
  const startDate = new Date(formData.get("startDate") as string).toUTCString();
};
