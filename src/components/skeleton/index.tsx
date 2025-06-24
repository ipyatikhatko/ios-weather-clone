import clsx from "clsx";
import classes from "./styles.module.css";
import type { ComponentProps } from "react";

interface SkeletonProps extends ComponentProps<"div"> {
  width?: string;
  height?: string;
  placeholder?: string;
}

export default function Skeleton({
  width,
  height,
  className,
  placeholder = "Some placeholder text",
  ...props
}: SkeletonProps) {
  return (
    <div
      className={clsx(classes.root, className)}
      style={{ width, height }}
      {...props}
    >
      {placeholder}
    </div>
  );
}
