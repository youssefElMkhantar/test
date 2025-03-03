import DomainFleet from 'src/Domain/Entities/Fleet';
import { Injectable } from '@nestjs/common';
import { Fleet } from '../../Entities/Fleet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import FleetRepository from 'src/Domain/Repositories/Fleet';
import Mapper from '../../../Mappers/entites-objects.mappers';

@Injectable()
export class FleetRepositoryService implements FleetRepository {
  mapper;
  constructor(
    @InjectRepository(Fleet)
    private readonly fleetRepository: Repository<Fleet>,
  ) {
    this.mapper = new Mapper();
  }

  async findAll() {
    const fleets = await this.fleetRepository.find();
    const _fleets = fleets.map((f) => this.mapper.FleetEntitieToObject(f));
    return _fleets;
  }

  async findById(id: number) {
    const fleet = await this.fleetRepository.findOneBy({ id });
    if (!fleet) {
      return null;
    }
    return this.mapper.FleetEntitieToObject(fleet);
  }

  async save(fleet: DomainFleet) {
    const createdFleet = this.fleetRepository.create(
      this.mapper.FleetObjectToEntitie(fleet),
    );
    const created = await this.fleetRepository.save(createdFleet);
    if (!created) {
      return null;
    }
    const t = this.mapper.FleetEntitieToObject(created) as DomainFleet;
    return t;
  }

  async delete(id: number) {
    return this.mapper.FleetEntiteToObject(
      await this.fleetRepository.delete(id),
    );
  }
}
