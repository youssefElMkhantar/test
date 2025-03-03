import { RegisterService } from './register.service';
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import DomainFleet from 'src/Domain/Entities/Fleet';
import DomainVehicle from 'src/Domain/Entities/Vehicle';
import { vehicleDTO } from './DTOs/vehicle.dto';
import { fleetDTO } from './DTOs/fleet.dto';
import { registerDTO } from './DTOs/register.dto';

@Controller()
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('createVehicle')
  createVehicle(@Body() vehicle: vehicleDTO) {
    // vehicle = JSON.parse(vehicle);
    return this.registerService.createVehicle(
      new DomainVehicle(vehicle.id, vehicle.location),
    );
  }

  @Post('createFleet')
  createFleet(@Body() fleet: fleetDTO) {
    return this.registerService.createFleet(
      new DomainFleet(fleet.id, fleet.registeredVehicles, fleet.parkedVehicles),
    );
  }

  @Post('register')
  register(@Body() body: registerDTO) {
    const { vehicleId, fleetId } = body;
    if (typeof vehicleId !== 'number' || typeof fleetId !== 'number') {
      throw new BadRequestException('invalid credentials');
    }
    return this.registerService.register(vehicleId, fleetId);
  }
}
