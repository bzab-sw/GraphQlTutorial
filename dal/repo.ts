import { Entity } from '../model/entity'

export class Repo<T extends Entity<TId>, TId> {
    protected entities: T[] = []

    public getAll(): T[] {
        return this.entities
    }

    public get(id: TId): T {
        const res = this.entities.find(e => e.id == id)
        if (res == null) {
            throw new Error(`Can't find entity with ID ${id}}`);
        }

        return res
    }

    public exists(id: TId): boolean {
        return this.entities.findIndex(e => e.id === id) >= 0
    }

    public delete(id: TId) {
        this.entities = this.entities.filter(e => e.id !== id)
    }

    public update(entity: T) {
        if (this.exists(entity.id)) {
            this.delete(entity.id)
            this.add(entity)
        } else {
            throw new Error(`Can't find entity with ID ${entity.id}}`);
        }
    }

    public add(entity: T) {
        if (this.exists(entity.id)) {
            throw new Error(`Entity with ID ${entity.id}} is already added.`);
        }
        this.entities.push(entity)
    }
}
