import { bubbleSort } from "./";

describe("sort", () => {
  const arr = [5, 2, 9, 1, 5, 6];
  const sortedArr = [1, 2, 5, 5, 6, 9];
  
  describe("bubble", () => {
    it("should sort", () => {
      const result = bubbleSort(arr);

      expect(result).toEqual(sortedArr);
    });
  });
});
