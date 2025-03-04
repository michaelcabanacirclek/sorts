// https://en.wikipedia.org/wiki/Levenshtein_distance
export function lev(a: string, b: string) {
  const s = a.split("");
  const t = b.split("");

  const m = s.length;
  const n = t.length;

  let v0: number[] = [];
  let v1: number[] = [];

  for (let i = 0; i <= n; i++) {
    v0[i] = i;
  }

  for (let i = 0; i <= m - 1; i++) {
    v1[0] = i + 1;

    for (let j = 0; j <= n - 1; j++) {
      const deletionCost = v0[j + 1] + 1;
      const insertionCost = v1[j] + 1;
      let substitutionCost: number;

      if (s[i] === t[j]) {
        substitutionCost = v0[j];
      } else {
        substitutionCost = v0[j] + 1;
      }

      v1[j + 1] = Math.min(deletionCost, insertionCost, substitutionCost);
    }

    const copyV0 = [...v0];
    v0 = [...v1];
    v1 = copyV0;
  }

  return v0[n];
}
