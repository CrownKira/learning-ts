{
  interface Reportable {
    // must have all these props, obj can have extra
    summary(): string; // a function called summary that returns a string
  }

  // type Vehicle = {
  //   // QN: why not use this?
  //   name: string;
  //   year: Date;
  //   broken: boolean;
  // };

  const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
      return `Name: ${this.name}`;
    },
  };

  const drink = {
    color: 'brown',
    carboanted: true,
    sugar: 40,
    summary(): string {
      return `My drink has ${this.sugar} grams of sugar`;
    },
  };

  const printSummary = (item: Reportable): void => {
    console.log(item.summary());
  };

  printSummary(oldCivic);
  printSummary(drink);
}
