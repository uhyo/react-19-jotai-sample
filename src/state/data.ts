import { atom } from "jotai";
import { fetchData } from "../data/fetchData";

export const dataAtom = atom(() => fetchData());

export const prefecturesAtom = atom(async (get) => {
  const data = await get(dataAtom);
  return Object.keys(data);
});
