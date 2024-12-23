import { atom } from "jotai";
import { prefecturesAtom } from "./data";
import { derive } from "jotai-derive";

const internalChecksAtom = atom<Set<string> | undefined>(undefined);

export const checksAtom = atom(
  (get) => {
    const internal = get(internalChecksAtom);
    // 初期状態は全チェック
    if (internal === undefined) {
      return get(prefecturesAtom).then((prefectures) => new Set(prefectures));
    }
    return internal;
  },
  (_get, set, checks: Set<string>) => {
    set(internalChecksAtom, checks);
  },
);

export const checkCountAtom = derive([checksAtom], (checks) => checks.size);

export const toggleCheckAtom = atom(
  null,
  async (get, set, prefecture: string) => {
    const checks = await get(checksAtom);
    const newChecks = new Set(checks);
    if (checks.has(prefecture)) {
      newChecks.delete(prefecture);
    } else {
      newChecks.add(prefecture);
    }
    set(checksAtom, newChecks);
  },
);
