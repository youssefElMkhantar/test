import { Module } from '@nestjs/common';
import { VehicleRepositoryService } from './vehicle-repository.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from 'src/Infra/Entities/Vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle])],
  providers: [VehicleRepositoryService],
  exports: [VehicleRepositoryService],
})
export class VehicleRepositoryModule {}
