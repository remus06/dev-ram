import type { ReactNode } from "react";
import { GridGuides } from "./dev-grid";

const isDev = process.env.NODE_ENV !== "production";

export function Spread({
  variant,
  children,
}: {
  variant?: "paper2" | "dark";
  children: ReactNode;
}) {
  return (
    <section className={`spread${variant ? ` ${variant}` : ""}`}>
      {children}
    </section>
  );
}

export function Wrap({
  tight,
  children,
}: {
  tight?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`wrap${tight ? " tight" : ""}`}>
      {isDev && <GridGuides />}
      {children}
    </div>
  );
}

export function Grid({ children }: { children: ReactNode }) {
  return <div className="grid">{children}</div>;
}

export function Band({ children }: { children: ReactNode }) {
  return <div className="band">{children}</div>;
}

export function Rule({ ink }: { ink?: boolean }) {
  return <div className={`rule${ink ? " ink" : ""}`} />;
}
