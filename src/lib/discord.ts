export interface DiscordUser {
  id: string;
  username: string;
  global_name?: string;
}

export async function fetchCurrentUser(): Promise<DiscordUser | undefined> {
  const response = await fetch(`https://discord.com/api/v10/users/@me`, {
    mode: "cors",
    credentials: "include",
  });

  if (!response.ok) {
    return;
  }

  return await response.json();
}
