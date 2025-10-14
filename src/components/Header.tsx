import { useContext } from "react";
import Button from "./UI/Button.tsx";
import { useTimersContext } from "../store/timers-context.tsx";

export default function Header() {
  const timersCtx = useTimersContext();

  // timersCtx can't really be null since value prop
  // in the provider will always have a value.
  // However, Typescript doesn't know that so
  // it will complain, hence, the below code.
  /*  if (timersCtx === null)
    throw new Error("Something went wrong") */
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button> {timersCtx.isRunning ? "Stop" : "Start"}</Button>
    </header>
  );
}
