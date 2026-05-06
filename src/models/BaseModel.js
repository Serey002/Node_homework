export class BaseModel {
    constructor() {
        if (this.constructor === BaseModel) {
            throw new Error("Cannot instantiate abstract class BaseModel");
        }
    }

    async get() {
        throw new Error("Child class must implement get()");
    }

    async find(id) {
        throw new Error("Child class must implement find(id)");
    }

    async create(data) {
        throw new Error("Child class must implement create(data)");
    }

    async update(id, data) {
        throw new Error("Child class must implement update(id, data)");
    }

    async delete(id) {
        throw new Error("Child class must implement delete(id)");
    }
}

