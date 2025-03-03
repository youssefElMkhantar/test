import DomainVehicle from 'src/Domain/Entities/Vehicle';
import { Injectable } from '@nestjs/common';
import { Vehicle } from 'src/Infra/Entities/Vehicle.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import VehicleRepository from 'src/Domain/Repositories/Vehicle';
import Mapper from '../../../Mappers/entites-objects.mappers';

@Injectable()
export class VehicleRepositoryService implements VehicleRepository {
  mapper;
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {
    this.mapper = new Mapper();
  }

  async findAll() {
    const vehicles = await this.vehicleRepository.find();
    const _vehicles = vehicles.map((v) =>
      this.mapper.VehicleEntitieToObject(v),
    );
    return _vehicles;
  }

  async findById(id: number) {
    const vehicle = await this.vehicleRepository.findOneBy({ id });
    if (!vehicle) {
      return null;
    }
    return this.mapper.VehicleEntitieToObject(vehicle);
  }

  async save(vehicle: DomainVehicle) {
    const createdVehicle = this.vehicleRepository.create(
      this.mapper.VehicleObjectToEntitie(vehicle),
    );
    const created = await this.vehicleRepository.save(createdVehicle);
    if (!created) {
      return null;
    }
    const t = this.mapper.VehicleEntitieToObject(created) as DomainVehicle;
    return t;
  }

  async delete(id: number) {
    return this.mapper.VehicleEntiteToObject(
      await this.vehicleRepository.delete(id),
    );
  }
}
