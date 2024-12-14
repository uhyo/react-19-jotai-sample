import type { FC, ReactNode } from "react";
import { css } from "restyle";

export const Layout: FC<{
  header: ReactNode;
  main: ReactNode;
  checks: ReactNode;
}> = ({ header, main, checks }) => {
  const [className, Styles] = css({
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
    gridTemplateRows: "auto auto",
    gap: "8px",
  });

  return (
    <section className={className}>
      <header
        css={{
          gridColumn: "1 / -1",
          textAlign: "center",
        }}
      >
        {header}
      </header>
      <div>{main}</div>
      <div>{checks}</div>
      <Styles />
    </section>
  );
};
