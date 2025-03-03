import FleetAggregate from '../Agregates/Fleet-aggregate';
import FleetRepository from '../Repositories/Fleet';
import VehicleRepository from '../Repositories/Vehicle';

export default class RegisterService {
  constructor(
    public vehicleRepository: VehicleRepository,
    public fleetRepository: FleetRepository,
  ) {}

  async register(vehicleId: number, fleetId: number) {
    const vehicle = await this.vehicleRepository.findById(vehicleId);
    if (!vehicle) {
      return "vehicle doesn't exist";
    }
    let fleet = await this.fleetRepository.findById(fleetId);
    if (!fleet) {
      return "fleet doesn't exist";
    }
    const fleet_aggregate = new FleetAggregate(fleet, vehicle);

    const alreadyRegistered = fleet_aggregate.findRegisteredVehicle(vehicle);
    if (alreadyRegistered) {
      return 'vehicle already registered in this fleet';
    }

    fleet = fleet.registerVehicle(vehicle.getId());
    return await this.fleetRepository.save(fleet);
  }
}
