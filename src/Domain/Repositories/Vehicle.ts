import Vehicle from '../Entities/Vehicle';

export default abstract class VehicleRepository {
  abstract findAll(): Promise<Vehicle[]>;
  abstract findById(id: number): Promise<Vehicle>;
  abstract save(vehicle: Vehicle): Promise<Vehicle>;
  abstract delete(id: number): Promise<Vehicle>;
}
