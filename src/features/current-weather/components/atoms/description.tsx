import { type PropsWithChildren } from "react";

export default function Description({ children }: PropsWithChildren) {
  return <p className="description">{children}</p>;
}
