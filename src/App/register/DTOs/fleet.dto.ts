import { Injectable } from '@nestjs/common';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@Injectable()
export class fleetDTO {
  @IsNumber()
  id: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Number)
  registeredVehicles: number[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Number)
  parkedVehicles: number[];
}
