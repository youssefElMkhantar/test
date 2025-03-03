import { Injectable } from '@nestjs/common';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class fleetDTO {
  @ApiProperty({ example: 8 })
  @IsNumber()
  id: number;

  @ApiProperty({ example: [1, 6, 0, 4] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Number)
  registeredVehicles: number[];

  @ApiProperty({ example: [] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Number)
  parkedVehicles: number[];
}
