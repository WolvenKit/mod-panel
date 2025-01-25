import { createResource, For, Show } from "solid-js";
import { data } from "../lib/lizzy";
import { DataRow } from "../components/DataRow";
import { discordData } from "../lib/discord";

export function InfoView() {
  const [info] = createResource(() => data);
  const [user] = createResource(() => discordData);

  return (
    <>
      <h2 class="w-full text-2xl">
        Logged in as <span class="font-bold">{user()?.global_name || user()?.username}</span>.
      </h2>

      <div class="flex w-full flex-wrap items-start gap-x-8 gap-y-4">
        <dl class="mr-auto grid grid-cols-[auto_auto] gap-x-4 gap-y-2 text-xl">
          <DataRow key="Status:" value={info()?.Status} />
          <DataRow key="Warning Level:" value={info()?.WarningLevel || 0} />
          <DataRow key="Warning Count:" value={info()?.WarningCount || 0} />
        </dl>

        <dl class="mr-auto grid grid-cols-[auto_auto] gap-x-4 gap-y-2 text-xl">
          <DataRow
            key="Last Warning:"
            value={<time datetime={info()?.LastWarning}>{new Date(info()?.LastWarning || 0).toLocaleString()}</time>}
          />
          <DataRow key="Last Reason:" value={info()?.LastReason} />
          <DataRow key="Resolve:" value={info()?.Resolve} />
        </dl>
      </div>

      <Show when={info()?.Warnings.length}>
        <h3 class="mt-8 w-full text-3xl font-bold">Warnings</h3>
        <ol class="ml-6 list-decimal space-y-4 marker:text-sm marker:text-zinc-400 marker:tabular-nums">
          <For each={info()?.Warnings}>
            {(warning) => (
              <li class="pl-2 leading-tight">
                <time class="block tabular-nums" datetime={warning.IssuedTime}>
                  {new Date(warning.IssuedTime).toLocaleString()}
                </time>

                <dl class="inline-grid grid-cols-[auto_auto] gap-x-4">
                  <DataRow key="Reason:" value={warning.Reason} />
                  <DataRow key="Issuer:" value={warning.Issuer} />
                </dl>
              </li>
            )}
          </For>
        </ol>
      </Show>
    </>
  );
}
