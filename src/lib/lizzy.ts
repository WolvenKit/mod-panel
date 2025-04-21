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

export const LOGIN_URL = `${import.meta.env.VITE_API_URL}/auth/login`;

export async function fetchMemberInfo(userId: string): Promise<LizzyMemberInfo> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/web/user/moderation/${userId}`, {
    mode: "cors",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Unexpected response code ${response.status}`);
  }

  return await response.json();
}
