import DomainFleet from 'src/Domain/Entities/Fleet';
import DomainVehicle from 'src/Domain/Entities/Vehicle';
import { FleetRepositoryService } from './../../Infra/repository/fleet-repository/fleet-repository.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { VehicleRepositoryService } from 'src/infra/repository/vehicle-repository/vehicle-repository.service';
import DomainRegisterService from 'src/Domain/Services/RegisterService';

@Injectable()
export class RegisterService {
  private readonly DomainRegisterService;

  constructor(
    private readonly vehicleRepositoryService: VehicleRepositoryService,
    private readonly fleetRepositoryService: FleetRepositoryService,
  ) {
    this.DomainRegisterService = new DomainRegisterService(
      vehicleRepositoryService,
      fleetRepositoryService,
    );
  }

  async createVehicle(vehicle: DomainVehicle) {
    const exists = await this.vehicleRepositoryService.findById(
      vehicle.getId(),
    );
    if (exists) {
      throw new BadRequestException('vehicle already exists');
    }
    return this.vehicleRepositoryService.save(vehicle);
  }

  async createFleet(fleet: DomainFleet) {
    const exists = await this.fleetRepositoryService.findById(fleet.getId());
    if (exists) {
      throw new BadRequestException('vehicle already exists');
    }
    return this.fleetRepositoryService.save(fleet);
  }

  async register(vehicleId: number, fleetId: number) {
    const newFleet = await this.DomainRegisterService.register(
      vehicleId,
      fleetId,
    );
    if (typeof newFleet === 'string') {
      throw new BadRequestException(newFleet);
    }
    return newFleet;
  }
}
