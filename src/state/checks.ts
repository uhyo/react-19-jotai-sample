import { atom } from "jotai";

export const uncheckedAtom = atom(new Set<string>());

export const toggleCheckAtom = atom(null, (get, set, prefecture: string) => {
  const checks = get(uncheckedAtom);
  const newChecks = new Set(checks);
  if (checks.has(prefecture)) {
    newChecks.delete(prefecture);
  } else {
    newChecks.add(prefecture);
  }
  set(uncheckedAtom, newChecks);
});
