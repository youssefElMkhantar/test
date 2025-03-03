import { Injectable } from '@nestjs/common';
import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class locationDTO {
  @ApiProperty({ example: 1 })
  @IsNumber()
  vehicleId: number;
}
