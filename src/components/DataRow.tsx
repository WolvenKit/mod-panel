import { JSXElement } from "solid-js";
import { twJoin } from "tailwind-merge";

interface DataRowProps {
  key: string | JSXElement;
  keyClass?: string;
  value: string | JSXElement;
  valueClass?: string;
}

export function DataRow(props: DataRowProps) {
  return (
    <>
      <dt class={twJoin("font-rajdhani", props.keyClass)}>{props.key}</dt>
      <dd class={twJoin("font-bold", props.valueClass)}>{props.value}</dd>
    </>
  );
}
