import Fleet from '../Entities/Fleet';

export default abstract class FleetRepository {
  abstract findAll(): Promise<Fleet[]>;
  abstract findById(id: number): Promise<Fleet>;
  abstract save(fleet: Fleet): Promise<Fleet>;
  abstract delete(id: number): Promise<Fleet>;
}
