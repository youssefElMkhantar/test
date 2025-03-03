import { Fleet } from 'src/Infra/Entities/Fleet.entity';
import { Vehicle } from 'src/Infra/Entities/Vehicle.entity';
import DomainVehicle from 'src/Domain/Entities/Vehicle';
import DomainFleet from 'src/Domain/Entities/Fleet';

export default class mapper {
  VehicleEntitieToObject(vehicle: Vehicle) {
    const { id, location } = vehicle;
    return new DomainVehicle(id, location);
  }

  FleetEntitieToObject(fleet: Fleet) {
    const { id, registeredVehicles, parkedVehicles } = fleet;
    return new DomainFleet(id, registeredVehicles, parkedVehicles);
  }

  VehicleObjectToEntitie(vehicle: DomainVehicle) {
    const Evehicle = new Vehicle();
    Evehicle.id = vehicle.getId();
    Evehicle.location = vehicle.getLocation();
    return Evehicle;
  }

  FleetObjectToEntitie(fleet: DomainFleet) {
    const Efleet = new Fleet();
    Efleet.id = fleet.getId();
    Efleet.registeredVehicles = fleet.getRegisteredVehicles();
    Efleet.parkedVehicles = fleet.getParkedVehicles();
    return Efleet;
  }
}
