export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean; // name of arg doesnt matter, only the type
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  // existing in the future, gonna be implemented by some child class
  abstract compare(leftIndex: number, rigthIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
