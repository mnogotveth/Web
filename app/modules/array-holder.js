export default class ArrayHolder {

  constructor(initialArray = []) {
    this.arrayStore = initialArray;
  }

  set(array) {
    this.arrayStore = array;
  }

  get() {
    return this.arrayStore;
  }

  clear() {
    this.arrayStore = [];
  }

  getElementByIndex(index) {
    if (typeof this.arrayStore[index] === "undefined") {
      throw new Error();
    } else {
      return this.arrayStore[index];
    }
  }

  removeElementByIndex(index) {
    return this.arrayStore.splice(index, 1);
  }

  sum() {
    if (!this.arrayStore.length){
      throw new Error();
    } else {
      return this.arrayStore.reduce((a, b) => a + b);
    }
  }

  average() {
    if (!this.arrayStore.length){
      return 0;
    }
    return this.sum() / this.arrayStore.length;
  }

  geometricMean() {
    if (!this.arrayStore.length){
      return 0;
    }
    return Math.pow(this.sum(), 1 / this.arrayStore.length);
  }

  min() {
    if (!this.arrayStore.length){
      return 0;
    }
    return Math.min(...this.arrayStore);
  }

  max() {
    if (!this.arrayStore.length){
      return 0;
    }
    return Math.max(...this.arrayStore);
  }
};
