import FleetAggregate from '../Agregates/Fleet-aggregate';
import FleetRepository from '../Repositories/Fleet';
import VehicleRepository from '../Repositories/Vehicle';

export default class ParkService {
  constructor(
    public vehicleRepository: VehicleRepository,
    public fleetRepository: FleetRepository,
  ) {}

  async park(vehicleId: number, fleetId: number) {
    const vehicle = await this.vehicleRepository.findById(vehicleId);
    if (!vehicle) {
      return "vehicle doesn't exist";
    }
    let fleet = await this.fleetRepository.findById(fleetId);
    if (!fleet) {
      return "fleet doesn't exist";
    }
    const fleet_aggregate = new FleetAggregate(fleet, vehicle);

    const alreadyParked = fleet_aggregate.findParkedVehicle(vehicle.getId());
    if (alreadyParked) {
      return 'vehicle already parked in this fleet';
    }

    fleet = fleet.parkVehicle(vehicle.getId());
    return await this.fleetRepository.save(fleet);
  }
}
