import { createSignal, Show, Suspense } from "solid-js";
import { LoginView } from "./views/LoginView";
import { InfoView } from "./views/InfoView";
import { Dots } from "./components/Dots";

export function App() {
  const [token, _setToken] = createSignal<string>("e");

  return (
    <>
      <h1 class="font-rajdhani w-full uppercase">
        <div class="text-red text-4xl font-bold">RED Modding</div>
        <div class="text-5xl text-zinc-200 md:text-6xl">Moderation panel</div>
      </h1>
      <Dots class="w-full" />

      <Suspense fallback={<>Loading...</>}>
        <Show when={token()} fallback={<LoginView />}>
          <InfoView />
        </Show>
      </Suspense>
    </>
  );
}
