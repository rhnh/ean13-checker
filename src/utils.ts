export function EAN(inputArray: number[]): number {
  return (
    10 -
    (inputArray
      .map((x: number, index: number) => (index % 2 !== 0 ? x * 3 : x))
      .reduce((arr: number, curr: number) => arr + curr) %
      10)
  );
}
const compose = (f, g) => x => f(g(x));

const map = (array: string[]): number[] => {
  const fn = (x: string): number => +x; //<- change to numeric
  return array.map(x => fn(x));
};

const split = (str: string): string[] => str.split("");

export const prep = compose(
  map,
  split
);
