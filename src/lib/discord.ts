export interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: string | null;
  accent_color: number | null;
  global_name?: string;
  avatar_decoration?: {
    asset: string;
    sku_id: string;
    expires_at: string | null;
  };
  collectibles: string | null;
  banner_color: string | null;
  clan: string | null;
  primary_guild: string | null;
  mfa_enabled: boolean;
  locale: string;
  premium_type: number;
  email: string | null;
  verified: boolean;
}

export async function fetchCurrentUser(): Promise<DiscordUser | null> {
  function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const part = parts.pop();
      return part ? part.split(";").shift() : undefined;
    }
  }

  const match = getCookie("discord");

  if (!match) return null;
  console.log(decodeURIComponent(match))
  return JSON.parse(decodeURIComponent(match)) as DiscordUser;
}
