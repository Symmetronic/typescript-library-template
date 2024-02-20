import sum from ".";

describe("sum", () => {
  it("returns 0 if values are empty", () => {
    expect(sum()).toBe(0);
  });

  it("returns sum of values", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});
