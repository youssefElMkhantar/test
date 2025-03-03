import { Module } from '@nestjs/common';
import { ParkService } from './park.service';
import { ParkController } from './park.controller';
import { FleetRepositoryModule } from 'src/Infra/repository/fleet-repository/fleet-repository.module';
import { VehicleRepositoryModule } from 'src/infra/repository/vehicle-repository/vehicle-repository.module';

@Module({
  imports: [FleetRepositoryModule, VehicleRepositoryModule],
  providers: [ParkService],
  controllers: [ParkController],
})
export class ParkModule {}
