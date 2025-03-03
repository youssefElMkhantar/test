// import Location from '../Value-objects/Location';

export default class Fleet {
  constructor(
    private id: number,
    private registeredVehicles: number[],
    private parkedVehicles: number[],
    // private location: Location,
  ) {}

  getId() {
    return this.id;
  }

  getRegisteredVehicles() {
    return this.registeredVehicles;
  }

  getParkedVehicles() {
    return this.parkedVehicles;
  }

  registerVehicle(vehicleId: number) {
    this.registeredVehicles.push(vehicleId);
    return this;
  }

  parkVehicle(vehicleId: number) {
    this.parkedVehicles.push(vehicleId);
    return this;
  }
}
