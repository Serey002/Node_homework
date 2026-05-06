import Database from "../config/db.js";
import { BaseModel } from "./BaseModel.js";

export class User extends BaseModel {
    constructor() {
        super();
    }

    async get() {
        const [rows] = await Database.pool.query("SELECT * FROM users");
        return rows;
    }

    async find(id) {
        const [rows] = await Database.pool.query(
            "SELECT * FROM users WHERE id = ?",
            [id]
        );

        return rows[0] || null;
    }

    async create(data) {
        const { name } = data;

        if (!name) {
            throw new Error("Name is required");
        }

        const [result] = await Database.pool.query(
            "INSERT INTO users (name) VALUES (?)",
            [name]
        );

        return {
            id: result.insertId,
            name
        };
    }

    async update(id, data) {
        const { name } = data;

        if (!name) {
            throw new Error("Name is required for update");
        }

        const [result] = await Database.pool.query(
            "UPDATE users SET name = ? WHERE id = ?",
            [name, id]
        );

        if (result.affectedRows === 0) return null;

        return this.find(id);
    }

    async delete(id) {
        const [result] = await Database.pool.query(
            "DELETE FROM users WHERE id = ?",
            [id]
        );

        return result.affectedRows > 0;
    }
}

export default new User();