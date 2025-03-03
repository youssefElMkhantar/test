import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ParkService } from './park.service';
import { parkDTO } from './DTOs/park.dto';
import { locationDTO } from './DTOs/location.dto';

@Controller('')
export class ParkController {
  constructor(private readonly parkService: ParkService) {}

  @Post('park')
  park(@Body() body: parkDTO) {
    const { vehicleId, fleetId } = body;
    return this.parkService.park(vehicleId, fleetId);
  }

  @Get('location')
  location(@Query('vehicleId') { vehicleId }: locationDTO) {
    return this.parkService.getLocation(vehicleId);
  }
}
