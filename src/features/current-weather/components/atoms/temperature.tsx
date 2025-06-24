import clsx from "clsx";
import { type PropsWithChildren } from "react";
import type { ICurrentWeather } from "../../lib/data";

interface TemperatureProps extends PropsWithChildren {
  type: keyof ICurrentWeather["temperature"];
}

const prefix: Record<keyof ICurrentWeather["temperature"], string> = {
  high: "H:",
  low: "L:",
  current: "",
};

export default function Temperature({ children, type }: TemperatureProps) {
  return (
    <span className={clsx("temperature", type)}>
      {prefix[type]}
      {children}
    </span>
  );
}
