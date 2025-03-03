import Fleet from '../Entities/Fleet';
import Vehicle from '../Entities/Vehicle';
import Location from '../Value-objects/Location';

export default class FleetAggregate {
  constructor(
    public fleet: Fleet,
    public vehicle: Vehicle,
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

  findParkedVehicle(vehicleId: number) {
    return this.fleet.getParkedVehicles().find((v) => v === vehicleId);
  }

  findRegisteredVehicle(vehicle: Vehicle) {
    return this.fleet
      .getRegisteredVehicles()
      .find((v) => v === vehicle.getId());
  }

  registerVehicle(vehicleId: number) {
    return this.fleet.registerVehicle(vehicleId);
  }

  parkVehicle(vehicleId: number, location: Location) {
    this.vehicle.setLocation(location);
    return this.fleet.parkVehicle(vehicleId);
  }
}
