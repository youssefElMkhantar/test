import Location from '../Value-objects/Location';

export default class Vehicle {
  constructor(
    private id: number,
    private location: Location,
  ) {}

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getLocation() {
    return this.location;
  }

  setLocation(location: Location) {
    this.location.latitude = location.latitude;
    this.location.longitude = location.longitude;
  }
}
