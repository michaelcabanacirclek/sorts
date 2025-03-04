import { bubbleSort } from "./";
import { lev } from "./utils";

describe("sort", () => {
  const arr = [5, 2, 9, 1, 5, 6];
  const sortedArr = [1, 2, 5, 5, 6, 9];

  const strA = "kitten";
  const strB = "sitting";
  const strDistance = 3;

  describe("bubble", () => {
    it("should sort", () => {
      const result = bubbleSort(arr);

      expect(result).toEqual(sortedArr);
    });
  });

  describe("levenshtein distance", () => {
    it("should calculate distance", () => {
      const result = lev(strA, strB);

      expect(result).toEqual(strDistance);
    });

    it("should sort based on distance", () => {
      const options = ["January", "February", "March", "April"];
      const term = "mar";
      const result = options.sort(
        (a, b) => lev(a.toLowerCase(), term) - lev(b.toLowerCase(), term)
      );

      expect(result).toEqual(["March", "April", "January", "February"]);
    });
  });
});
