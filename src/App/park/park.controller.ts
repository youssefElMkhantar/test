import { Controller, Post, Body } from '@nestjs/common';
import { ParkService } from './park.service';

@Controller('')
export class ParkController {
  constructor(private readonly parkService: ParkService) {}

  @Post('park')
  register(
    @Body('vehicleId') vehicleId: number,
    @Body('fleetId') fleetId: number,
  ) {
    console.log(vehicleId, fleetId);
    return this.parkService.park(vehicleId, fleetId);
  }
}
