{
  const profile = {
    name: 'alex',
    age: 20,
    coords: {
      lat: 0,
      lng: 5,
    },
    setAge(age: number): void {
      this.age = age;
    },
  };

  // destructuring
  const { age, name }: { age: number; name: string } = profile;
  const {
    coords: { lat, lng },
  }: { coords: { lat: number; lng: number } } = profile;
}