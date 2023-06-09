import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("ops i did it again!");

  return <small>{value}</small>;
});
