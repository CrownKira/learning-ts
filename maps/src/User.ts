import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  // we want every User we create to satisfy the Mappable, optional but important step
  // help TS to track error better
  // TS will make sure it implements mappable
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
