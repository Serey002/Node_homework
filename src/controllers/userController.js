import User from "../models/User.js";
import { BaseController } from "./BaseController.js";

class UserController extends BaseController {
    constructor() {
        super(User);
    }

    // Only add custom methods if needed

    async getActiveUsers(req, res) {
        try {
            const users = await this.model.getActiveUsers();

            return this.success(res, 200, true, "Get active users successfully.", users);
        } catch (error) {
            return this.error(res, 500, false, error.message);
        }
    }
}

export default new UserController();