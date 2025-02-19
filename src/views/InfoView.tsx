import { For, Show } from "solid-js";
import { DataRow } from "../components/DataRow";
import { DiscordUser } from "../lib/discord";
import { LizzyMemberInfo } from "../lib/lizzy";
import { ParentProps } from "solid-js/types/server/rendering.js";

export interface InfoViewProps {
  user: DiscordUser;
  info: LizzyMemberInfo;
}

export function InfoView(props: InfoViewProps) {
  return (
    <>
      <h2 class="w-full text-2xl">
        Logged in as <span class="font-bold">{props.user.global_name || props.user.username}</span>.
      </h2>

      <div class="flex w-full flex-wrap items-start gap-x-8 gap-y-4">
        <dl class="mr-auto grid grid-cols-[auto_auto] gap-x-4 gap-y-2 text-xl">
          <DataRow key="Status:" value={props.info.Status ?? "Clear"} />
          <DataRow key="Warning Level:" value={props.info.WarningLevel || 0} />
          <DataRow key="Warning Count:" value={props.info.WarningCount || 0} />
        </dl>

        <dl class="mr-auto grid grid-cols-[auto_auto] gap-x-4 gap-y-2 text-xl">
          <DataRow
            key="Last Warning:"
            value={
              <Show when={props.info.LastWarning} fallback={<EmptyValue>Never</EmptyValue>}>
                {(lastWarning) => <time datetime={lastWarning()}>{new Date(lastWarning() || 0).toLocaleString()}</time>}
              </Show>
            }
          />
          <DataRow key="Last Reason:" value={props.info.LastReason} />
          <DataRow
            key="Resolved:"
            value={
              String(props.info.Resolved ?? true)
                .charAt(0)
                .toUpperCase() + String(props.info.Resolved ?? true).slice(1)
            }
          />
        </dl>
      </div>

      <Show when={props.info.Warnings?.length}>
        <h3 class="mt-8 w-full text-3xl font-bold">Warnings</h3>
        <ol class="ml-6 list-decimal space-y-4 marker:text-sm marker:text-zinc-400 marker:tabular-nums">
          <For each={props.info.Warnings}>
            {(warning) => (
              <li class="pl-2 leading-tight">
                <time class="block tabular-nums" datetime={warning.IssuedTime}>
                  {new Date(warning.IssuedTime).toLocaleString()}
                </time>

                <dl class="inline-grid grid-cols-[auto_auto] gap-x-4">
                  <DataRow key="Reason:" value={warning.Reason} />
                  <DataRow
                    key="Issuer:"
                    value={warning.IssuerName.charAt(0).toUpperCase() + warning.IssuerName.slice(1)}
                  />
                </dl>
              </li>
            )}
          </For>
        </ol>
      </Show>
    </>
  );
}

function EmptyValue(props: ParentProps) {
  return <span class="text-zinc-400 italic">{props.children}</span>;
}
