class HoldAnything<T> {
  data: T;

  add(a: T): T {
    return a;
  }
}

const holdNumber = new HoldAnything<number>();
// class defi is receiving the number

const holdString = new HoldAnything<string>();
