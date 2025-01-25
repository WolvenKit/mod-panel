import { twJoin } from "tailwind-merge";

export function Dots(props: { class?: string }) {
  return (
    <div
      class={twJoin(
        "before:bg-red after:bg-red block px-4 before:mr-2 before:inline-block before:size-2 before:rounded-full after:inline-block after:size-2 after:rounded-full",
        props.class,
      )}
    />
  );
}
