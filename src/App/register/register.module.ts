import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { FleetRepositoryModule } from 'src/Infra/repository/fleet-repository/fleet-repository.module';
import { VehicleRepositoryModule } from 'src/infra/repository/vehicle-repository/vehicle-repository.module';

@Module({
  imports: [FleetRepositoryModule, VehicleRepositoryModule],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
