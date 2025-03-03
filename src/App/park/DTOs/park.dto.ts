import { Injectable } from '@nestjs/common';
import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class parkDTO {
  @ApiProperty({ example: 8 })
  @IsNumber()
  vehicleId: number;

  @ApiProperty({ example: 8 })
  @IsNumber()
  fleetId: number;
}
