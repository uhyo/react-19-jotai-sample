import { atom, useAtomValue } from "jotai";
import type { FC } from "react";
import { dataAtom } from "../state/data";
import { checksAtom } from "../state/checks";

const calculatedDataAtom = atom(async (get) => {
  const data = await get(dataAtom);
  const checks = await get(checksAtom);
  let sum = 0;
  for (const [prefecture, value = 0] of Object.entries(data)) {
    if (checks.has(prefecture)) {
      sum += value;
    }
  }
  const average = sum / checks.size;
  const size = checks.size;
  // 計算に0.25秒かかる想定
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { sum, average, size };
});

export const Main: FC = () => {
  const { sum, average, size } = useAtomValue(calculatedDataAtom);
  return (
    <div>
      <p>{size}個の都道府県の</p>
      <p>合計 = {sum.toLocaleString()}</p>
      <p>平均 = {average.toLocaleString()}</p>
    </div>
  );
};
