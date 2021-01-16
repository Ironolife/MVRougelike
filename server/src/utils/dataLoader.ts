import DataLoader from "dataloader";
import { BaseEntity, Repository } from "typeorm";

const dataLoader = <T extends BaseEntity & { id: number }>(
  repo: Repository<T>
) =>
  new DataLoader<number, T>(async (ids: readonly number[]) => {
    const entities = await repo.findByIds(ids as number[]);
    const map = new Map<number, T>();
    entities.forEach((entity) => {
      map.set(entity.id, entity);
    });
    return ids.map((id) => map.get(id) || new Error(`id ${id} not found`));
  });

export default dataLoader;
