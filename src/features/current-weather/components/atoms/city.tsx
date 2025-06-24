import { type PropsWithChildren } from "react";

export default function City({ children }: PropsWithChildren) {
  return <h3 className="city">{children}</h3>;
}
