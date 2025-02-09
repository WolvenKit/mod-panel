export interface Warning {
  ID: number;
  IssuedTime: string; // ISO 8601 date string
  Reason: string;
  IssuerName: string;
}

export interface LizzyMemberInfo {
  DiscordId: string;
  Status: "Warn" | "Kick" | "Ban";
  WarningLevel: number;
  WarningCount: number;
  LastWarning: string; // ISO 8601 date string
  LastReason: string;
  Resolved: boolean;
  Warnings: Warning[];
}

export const data: LizzyMemberInfo = await fetch("http://localhost:3000/api/web/user/moderation/697882016892321843")
  .then((response) => response)
  .then((res) => res.json())
  .catch((error) => console.error(error));

// export const data: LizzyMemberInfo = {
//   DiscordId: "879182739817238123",
//   Status: "Warned",
//   WarningLevel: 3,
//   WarningCount: 14,
//   LastWarning: "2021-10-10T12:00:00Z",
//   LastReason: "Because they've been a dick.",
//   Resolve: null,
//   Warnings: [
//     {
//       ID: 1,
//       IssuedTime: "2021-10-10T12:00:00Z",
//       Reason: "Because",
//       Issuer: "Manfred",
//     },
//     {
//       ID: 2,
//       IssuedTime: "2021-10-10T12:00:00Z",
//       Reason: "Because",
//       Issuer: "Gustaf",
//     },
//     {
//       ID: 3,
//       IssuedTime: "2021-10-10T12:00:00Z",
//       Reason: "Because",
//       Issuer: "Zhin",
//     },
//     {
//       ID: 4,
//       IssuedTime: "2021-10-10T12:00:00Z",
//       Reason: "Because",
//       Issuer: "Everyone",
//     },
//   ],
// };
