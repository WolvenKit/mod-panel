import discordIcon from "../assets/discord-mark-white.svg";

export function LoginView() {
  return (
    <>
      <p class="max-w-2xl text-pretty">
        This website allows you to login with Discord and review your current moderation status on our community Discord
        server. This way you can see what moderation actions were taken against you and why, as well as info on how to
        resolve the problem.
      </p>

      <a
        href="/"
        class="bg-blurple font-default hover:bg-blurple/75 m-auto inline-block rounded-xl p-4 text-lg transition"
      >
        <img src={discordIcon} class="mr-2 inline size-7" alt="" /> Login with Discord
      </a>
    </>
  );
}
