import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const mainIncrement = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  //   const mainIncrement = () => {
  //     setCounter(counter + 1);
  //   };
  return (
    <>
      <h1>useCallback Hook:{counter}</h1>
      <hr />

      <ShowIncrement increment={mainIncrement} />
    </>
  );
};
