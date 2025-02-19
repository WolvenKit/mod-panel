import { Show } from "solid-js";

export interface AppErrorProps {
  error: unknown;
  retry?: () => void;
}

export function AppError(props: AppErrorProps) {
  return (
    <div class="border-red m-auto mt-16 max-w-lg border-2 p-8">
      <h1 class="text-red mb-2 text-2xl font-medium uppercase">Error fetching data</h1>

      <p class="leading-tight">
        <Show when={props.error instanceof Error && props.error.message?.startsWith("NetworkError")}>
          Make sure you're connected to the internet and that no extension is blocking cookies!
        </Show>
      </p>

      <code class="mt-8 block text-sm leading-none text-zinc-400">{props.error?.toString()}</code>

      <Show when={props.retry}>
        <button
          class="text-cyan hover:text-cyan-light float-right mt-4 cursor-pointer underline"
          on:click={props.retry}
        >
          Retry
        </button>
      </Show>
    </div>
  );
}
