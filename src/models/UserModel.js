import Database from "../config/db.js";

class UserModel {
    // Get all users
    static async getAllUsers(){
        const [rows] = await Database.pool.query(
            "SELECT * FROM users"
        ); // Array destructuring 
        
        return rows; // Return the array of users
    }

    //Get user by id
    static async getUserById(id) {
        const [rows] = await Database.pool.query(
            "SELECT * FROM users WHERE id = ?", [id]
        );
        return rows;
    }

    //Create user
    static async createUser(data){
        const {name} = data; // Object destructuring
        const [result] = await Database.pool.query(
            "INSERT INTO users (name) VALUES (?)", [name]
        );
        return result;
    }

    //Update user
    static async updateUser(id, data) {
        const { name } = data;
        const [result] = await Database.pool.query(
            "UPDATE users SET name = ? WHERE id = ?", [name, id]
        );
        return result;
    }

    // Delete user
    static async deleteUser(id){
        const [result] = await Database.pool.query(
            "DELETE FROM users WHERE id = ?", [id]
        );
        return result;
    }
}

export default UserModel;