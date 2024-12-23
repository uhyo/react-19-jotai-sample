import { useAtomValue, useSetAtom } from "jotai";
import type { FC } from "react";
import { prefecturesAtom } from "../state/data";
import { checkCountAtom, checksAtom, toggleCheckAtom } from "../state/checks";

export const Checks: FC = () => {
  const prefectures = useAtomValue(prefecturesAtom);
  const checks = useAtomValue(checksAtom);
  const checkCount = useAtomValue(checkCountAtom);
  const toggle = useSetAtom(toggleCheckAtom);

  return (
    <>
      <p>{checkCount}個選択中</p>
      <ul
        css={{
          listStyleType: "none",
          display: "grid",
          gap: "4px",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        }}
      >
        {prefectures.map((prefecture) => (
          <li key={prefecture}>
            <label>
              <input
                type="checkbox"
                checked={checks.has(prefecture)}
                onChange={() => {
                  toggle(prefecture);
                }}
              />
              {prefecture}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};
