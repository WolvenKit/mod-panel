export interface Warning {
  ID: number;
  IssuedTime: string; // ISO 8601 date string
  Reason: string;
  IssuerName: string;
}

export interface LizzyMemberInfo {
  DiscordId: string;
  Status: "Warn" | "Kick" | "Ban" | null;
  WarningLevel: number | null;
  WarningCount: number | null;
  LastWarning: string | null; // ISO 8601 date string
  LastReason: string | null;
  Resolved: boolean;
  Warnings?: Warning[];
}

const URL = new URLSearchParams({
  client_id: "796283112199553044",
  response_type: "code",
  redirect_uri: `${import.meta.env.VITE_API_URL}/auth/redirect`,
  scope: "identify guilds email",
});

export const LOGIN_URL = `https://discord.com/oauth2/authorize?${URL.toString()}`;

export async function fetchMemberInfo(userId: string): Promise<LizzyMemberInfo> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/web/moderation/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Unexpected response code ${response.status}`);
  }

  return await response.json();
}
