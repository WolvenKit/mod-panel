import { createResource, ErrorBoundary, Show, Suspense } from "solid-js";
import { LoginView } from "./views/LoginView";
import { InfoView } from "./views/InfoView";
import { Dots } from "./components/Dots";
import { fetchMemberInfo } from "./lib/lizzy";
import { fetchCurrentUser } from "./lib/discord";
import { AppError } from "./components/Error";

export function App() {
  const [user, { refetch }] = createResource(fetchCurrentUser);
  const [info] = createResource(() => user.state === "ready" && user()?.id, fetchMemberInfo);
  const error = () => user.error || info.error;

  return (
    <>
      <h1 class="font-rajdhani w-full uppercase">
        <div class="text-red text-4xl font-bold">RED Modding</div>
        <div class="text-5xl text-zinc-200 md:text-6xl">Moderation panel</div>
      </h1>
      <Dots class="w-full" />

      <Show when={!error()} fallback={<AppError error={error()} retry={refetch} />}>
        <ErrorBoundary fallback={(error, reset) => <AppError error={error} retry={reset} />}>
          <Suspense fallback={<>Loading...</>}>
            <Show when={info()} fallback={<LoginView />}>
              <InfoView user={user()!} info={info()!} />
            </Show>
          </Suspense>
        </ErrorBoundary>
      </Show>
    </>
  );
}
