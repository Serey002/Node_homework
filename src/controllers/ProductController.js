import Product from "../models/Product.js";
import { BaseController } from "./BaseController.js";

class ProductController extends BaseController {
    constructor() {
        super(Product);
    }

    // Only add custom methods if needed

    async getProductsByCategory(req, res) {
        try {
            const { category } = req.params;
            const products = await this.model.getByCategory(category);

            return this.success(
                res,
                200,
                true,
                "Get products by category successfully.",
                products
            );
        } catch (error) {
            return this.error(res, 500, false, error.message);
        }
    }
}

export default new ProductController();