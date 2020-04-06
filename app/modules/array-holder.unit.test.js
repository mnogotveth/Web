import ArrayHolder from "./array-holder";

const array = [1, 2, 3];
function getInitialData() {
  const arrayHolder = new ArrayHolder();
  arrayHolder.set(array);
  return arrayHolder;
}

test('get unexsisting element', () => {
  const arrayHolder = new ArrayHolder();
  expect(() => {arrayHolder.getElementByIndex(0)}).toThrow();
});

test('get array sum', () => {
  const arrayHolder = new ArrayHolder();
  expect(() => {arrayHolder.sum()}).toThrow();
  arrayHolder.set(array);
  expect(arrayHolder.sum()).toBe(6);
});

test ('unit test 1', () => {
  const arrayHolder = new ArrayHolder();
  expect(arrayHolder.average()).toBe(0);
  expect(arrayHolder.geometricMean()).toBe(0);
  expect(() => {arrayHolder.sum()}).toThrow();
  expect(arrayHolder.min()).toBe(0);
  expect(arrayHolder.max()).toBe(0);
});


const arr = [1];
test ('unit test 2', () => {
  const arrayHolder = new ArrayHolder();
  arrayHolder.set(arr);
  expect(arrayHolder.average()).toBe(1);
  expect(arrayHolder.geometricMean()).toBe(1);
  expect(arrayHolder.sum()).toBe(1);
  expect(arrayHolder.min()).toBe(1);
  expect(arrayHolder.max()).toBe(1);
});

const arr = [1,2,3];
test('unit test 3', () => {
  const arrayHolder = new ArrayHolder();
  arrayHolder.set(arr);
  expect(arrayHolder.average()).toBe(2);
  expect(arrayHolder.geometricMean()).toBe(Math.pow(6, 1/3));
  expect(arrayHolder.sum()).toBe(6);
  expect(arrayHolder.min()).toBe(1);
  expect(arrayHolder.max()).toBe(3);
});
  const arr = [1,2,3];
  test('unit test 4', () => {
    const arrayHolder = new ArrayHolder();
    arrayHolder.set(arr);
    arrayHolder.removeElementByIndex(2);
    expect(arrayHolder.average()).toBe(1.5);
    expect(arrayHolder.geometricMean()).toBe(Math.pow(3, 1/2));
    expect(arrayHolder.sum()).toBe(3);
    expect(arrayHolder.min()).toBe(1);
    expect(arrayHolder.max()).toBe(2);
  });

const arr = [1,2,3];
test('unit test 5', () => {
  const arrayHolder = new ArrayHolder();
  arrayHolder.set(arr);
  arrayHolder.clear();
  expect(arrayHolder.average()).toBe(0);
  expect(arrayHolder.geometricMean()).toBe(0);
  expect(() => {arrayHolder.sum()}).toThrow();
  expect(arrayHolder.min()).toBe(0);
  expect(arrayHolder.max()).toBe(0);
});