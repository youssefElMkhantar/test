import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Fleet {
  @PrimaryColumn()
  id: number; // Auto-generated primary key

  @Column('json')
  registeredVehicles: number[];

  @Column('json')
  parkedVehicles: number[];
}
