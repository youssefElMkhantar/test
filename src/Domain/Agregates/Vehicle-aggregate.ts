import Fleet from '../Entities/Fleet';
import Vehicle from '../Entities/Vehicle';

export default class VehicleAggregate {
  constructor(
    private vehicle: Vehicle,
    private fleet: Fleet,
  ) {}

  getVehicle() {
    return this.vehicle;
  }

  getFleet() {
    return this.fleet;
  }

  setVehicle(vehicle: Vehicle) {
    this.vehicle = vehicle;
  }

  setFleet(fleet: Fleet) {
    this.fleet = fleet;
  }
}
