import { Entity } from '../model/entity'

export abstract class Repo<T extends Entity<TId>, TId> {
    protected entities: T[] = []

    public abstract get EntityName(): string;

    public getAll(): T[] {
        console.log(`Getting all entities of type '${this.EntityName}'.`);
        return this.entities;
    }

    public get(id: TId): T {
        console.log(`Getting a '${this.EntityName}' with ID '${id}'.`);

        const res = this.entities.find(e => e.id == id);
        if (res == null) {
            throw new Error(`Can't find entity with ID ${id}}`);
        }

        return res;
    }

    public exists(id: TId): boolean {
        console.log(`Checking if a '${this.EntityName}' exists with ID '${id}'.`);

        return this.entities.findIndex(e => e.id === id) >= 0
    }

    public delete(id: TId) {
        console.log(`Deleting a '${this.EntityName}' with ID '${id}'.`);
        this.entities = this.entities.filter(e => e.id !== id)
    }

    public update(entity: T) {
        console.log(`Updating a '${this.EntityName}' with ID '${entity.id}'.`);

        if (this.exists(entity.id)) {
            this.delete(entity.id)
            this.add(entity)
        } else {
            throw new Error(`Can't find entity with ID ${entity.id}}`);
        }
    }

    public add(entity: T) {
        console.log(`Adding a '${this.EntityName}' with ID '${entity.id}'.`);
        if (this.exists(entity.id)) {
            throw new Error(`Entity with ID ${entity.id}} is already added.`);
        }
        this.entities.push(entity)
    }
}
