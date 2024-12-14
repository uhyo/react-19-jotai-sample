export type Data = Partial<Record<string, number>>;

export function fetchData(): Promise<Data> {
  return import("./data.json").then((res) => res.default);
}
