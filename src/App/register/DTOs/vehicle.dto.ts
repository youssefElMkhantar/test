import { Injectable } from '@nestjs/common';
import { IsNumber, IsNotEmptyObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class Location {
  @IsNumber()
  latitude: number;
  @IsNumber()
  longitude: number;
}

@Injectable()
export class vehicleDTO {
  @ApiProperty({ example: 3 })
  @IsNumber()
  id: number;

  @ApiProperty({ example: { latitude: 400.534, longitude: 330.007 } })
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => Location)
  location: Location;
}
