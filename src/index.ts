import { lev } from "./utils";

export function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
      }
    }
  }
  return arr;
}

export function levSort(
  options: string[],
  term: string,
  order: "ASC" | "DESC" = "ASC"
) {
  options.sort((a, b) => {
    if (order === "ASC") {
      return lev(a.toLowerCase(), term) - lev(b.toLowerCase(), term);
    } else {
      return lev(b.toLowerCase(), term) - lev(a.toLowerCase(), term);
    }
  });
}
