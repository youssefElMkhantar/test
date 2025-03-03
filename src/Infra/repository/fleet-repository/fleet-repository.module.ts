import { Module } from '@nestjs/common';
import { FleetRepositoryService } from './fleet-repository.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fleet } from 'src/Infra/Entities/Fleet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fleet])],
  providers: [FleetRepositoryService],
  exports: [FleetRepositoryService],
})
export class FleetRepositoryModule {}
