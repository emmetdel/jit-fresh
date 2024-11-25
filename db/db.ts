/// <reference lib="deno.unstable" />

const db = await Deno.openKv();

export const getUser = async (userId: string) => {
  const user = await db.get(["user", userId]);
  return user;
};

export const listJournalEntries = () => {
  const entries = db.list({ prefix: ["journal"] });
  return entries;
};
