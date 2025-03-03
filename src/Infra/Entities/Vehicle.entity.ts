import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryColumn()
  id: number; // Auto-generated primary key

  @Column('json')
  location: { latitude: number; longitude: number };
}
