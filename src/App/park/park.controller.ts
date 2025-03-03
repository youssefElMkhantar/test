import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ParkService } from './park.service';

@Controller('')
export class ParkController {
  constructor(private readonly parkService: ParkService) {}

  @Post('park')
  register(
    @Body('vehicleId') vehicleId: number,
    @Body('fleetId') fleetId: number,
  ) {
    return this.parkService.park(vehicleId, fleetId);
  }

  @Get('location')
  location(@Query('vehicleId') vehicleId: number) {
    return this.parkService.getLocation(vehicleId);
  }
}
