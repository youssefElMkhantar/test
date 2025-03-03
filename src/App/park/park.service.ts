import { FleetRepositoryService } from './../../Infra/repository/fleet-repository/fleet-repository.service';
import { VehicleRepositoryService } from 'src/infra/repository/vehicle-repository/vehicle-repository.service';
import DomaineParkService from 'src/Domain/Services/ParkService';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ParkService {
  domaineParkService;
  constructor(
    private readonly vehicleRepositoryService: VehicleRepositoryService,
    private readonly fleetRepositoryService: FleetRepositoryService,
  ) {
    this.domaineParkService = new DomaineParkService(
      vehicleRepositoryService,
      fleetRepositoryService,
    );
  }

  async park(vehicleId: number, fleetId: number) {
    const newFleet = await this.domaineParkService.park(vehicleId, fleetId);
    if (typeof newFleet === 'string') {
      throw new BadRequestException(newFleet);
    }
    return newFleet;
  }

  async getLocation(vehicleId: number) {
    const vehicle = await this.vehicleRepositoryService.findById(vehicleId);
    if (!vehicle) {
      throw new BadRequestException("vehicle doesn't exists");
    }
    return vehicle.location;
  }
}
