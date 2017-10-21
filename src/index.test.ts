import { filter, map } from './index';

test('jest', () => {
  expect(true).toBeTruthy();
});

test('map with array of numbers', () => {
  const arr: number[] = [1,2,3,4,5];
  const mapFn = (x: number) => x;
  expect(map(arr, mapFn)).toEqual(arr);
});

test('map with array of strings', () => {
  const arr: string[] = ["H","HE","HEL","HELL","HELLO"];
  const mapFn = (x: string) => x.length;
  expect(map(arr, mapFn)).toEqual([1,2,3,4,5]);
});

test('filter for even numbers', () => {
  const arr: number[] = [1,2,3,4,5];
  const predicate = (x: number) => x % 2 === 0;
  expect(filter(arr, predicate)).toEqual([2,4]);
});

test('filter for string length', () => {
  const arr: string[] = ["H","HE","HEL","HELL","HELLO"];
  const predicate = (x: string) => x.length >= 3;
  expect(filter(arr, predicate)).toEqual(["HEL","HELL","HELLO"]);
});