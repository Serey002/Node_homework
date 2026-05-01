import UserModel from "../models/UserModel.js";
import { request, response } from "express";
import { BesetController } from "./baseController.js";

class UserController extends BesetController {

    // Get all users
    async getAllUsers(req, res) {
        console.log("API HIT");
        try {
            const users = await UserModel.getAllUsers();
            this.success(res, 201, true, "Get all users successfully.", users);
            // return res.status(200).json({
            //     success: true,
            //     message: "Get all users successfully.",
            //     data: users
            // });

        } catch (error) {
            this.error(res, 500, false, "Users not found");
        }
    }

    //Get user by id
    async getUserById(req, res) {
        try{
            const { id } = req. params;
            const user = await UserModel.getUserById(id);
            
            if (user.length > 0) {
                this.success(res, 200, true, "Get user by id successfully.", user[0]);
            }else{
                this.error(res, 404, false, "User not found");
            }
        }catch{
            this.error(res, 500, false, "An error occurred while retrieving the user");
        }
    }

    // Create user
    async createUser(req, res) {
        try {
            const data = req.body;
            const result = await UserModel.createUser(data);
            this.success(res, 201, true, "Create user successfully.", result);
        } catch (error) {
            this.error(res, 500, false, "Failed to create user")
        }
    }
    
    // Update user
    async updateUser(req, res){
        try {
            const { id } = req.params;
            const data = req.body;
            await UserModel.updateUser(id, data);
            this.success(res, 200, true, "User updated successfully.");
        } catch (error) {
            this.error(res, 500, false, "Failed to update user")
        }
    }

    // Delete user
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            await UserModel.deleteUser(id);
            this.success(res, 200, true, "User deleted successfully.");
        } catch (error) {
            sthis.error(res, 404, false, "User not found");
        }
    }
}

export default new UserController();
