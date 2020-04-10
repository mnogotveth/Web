import ArrayHolder from "./array-holder";

const array = [1, 2, 3];

function getInitialData() {
  const arrayHolder = new ArrayHolder();
  arrayHolder.set(array);
  return arrayHolder;
}
//classwork
test('get unexsisting element', () => {
  const arrayHolder = new ArrayHolder();
  expect(() => {
    arrayHolder.getElementByIndex(0)
  }).toThrow();
});

test('get array sum', () => {
  const arrayHolder = new ArrayHolder();
  expect(() => {
    arrayHolder.sum()
  }).toThrow();
  arrayHolder.set(array);
  expect(arrayHolder.sum()).toBe(6);
});

test('get ellement by index', ()=>{
  const arrayHolder = new ArrayHolder();
  arrayHolder.set(array);
  expect(arrayHolder.getElementByIndex(0)).toBe(array[0]);
});

test('get count elements', ()=>{
  const arrayHolder = new ArrayHolder();
  arrayHolder.set(array);
  expect(arrayHolder.get()).toBe(array[1,2,3]);
});

//homework
test('expect 0 0 0 0', () => {
  const arrayHolder = new ArrayHolder();
  expect(arrayHolder.average()).toBe(0);
  expect(arrayHolder.geometricMean()).toBe(0);
  expect(arrayHolder.min()).toBe(0);
  expect(arrayHolder.max()).toBe(0);
});

test('set 1, expext 1 1 1 1', () => {
  const arrayHolder = new ArrayHolder();
  arrayHolder.set(['1']);
  expect(arrayHolder.average()).toBe(1);
  expect(arrayHolder.geometricMean()).toBe(1);
  expect(arrayHolder.min()).toBe(1);
  expect(arrayHolder.max()).toBe(1);
});

test('set 1 2 3', () => {
  const arrayHolder = new ArrayHolder();
  arrayHolder.set(array);
  expect(arrayHolder.average()).toBe(2);
  expect(arrayHolder.geometricMean()).toBe(Math.pow(6, 1/3));
  expect(arrayHolder.min()).toBe(1);
  expect(arrayHolder.max()).toBe(3);
});

test('delete last value', () => {
  const arrayHolder = new ArrayHolder();
  arrayHolder.set(array);
  arrayHolder.removeElementByIndex(arrayHolder.arrayStore.length - 1);
  expect(arrayHolder.average()).toBe(1.5);
  expect(arrayHolder.geometricMean()).toBe(Math.pow(3, 1/2));
  expect(arrayHolder.min()).toBe(1);
  expect(arrayHolder.max()).toBe(2);
});

test('delete all values', () => {
  const arrayHolder = new ArrayHolder();
  arrayHolder.set(array);
  arrayHolder.clear();
  expect(arrayHolder.average()).toBe(0);
  expect(arrayHolder.geometricMean()).toBe(0);
  expect(arrayHolder.min()).toBe(0);
  expect(arrayHolder.max()).toBe(0);
});

