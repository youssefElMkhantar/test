import { Injectable } from '@nestjs/common';
import { IsNumber, IsNotEmptyObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class Location {
  @IsNumber()
  latitude: number;
  @IsNumber()
  longitude: number;
}

@Injectable()
export class vehicleDTO {
  @IsNumber()
  id: number;

  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => Location)
  location: Location;
}
