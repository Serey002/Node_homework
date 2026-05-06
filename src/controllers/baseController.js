export class BaseController {
    constructor(model) {
        this.model = model;

        // Bind methods (important for Express routes)
        this.getAll = this.getAll.bind(this);
        this.find = this.find.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req, res) {
        try {
            const data = await this.model.get();
            return this.success(res, 200, true, "Get all successfully.", data);
        } catch (err) {
            return this.error(res, 500, false, err.message);
        }
    }

    async find(req, res) {
        try {
            const { id } = req.params;
            const data = await this.model.find(id);

            if (!data) {
                return this.error(res, 404, false, "Data not found");
            }

            return this.success(res, 200, true, "Find successfully.", data);
        } catch (err) {
            return this.error(res, 500, false, err.message);
        }
    }

    async create(req, res) {
        try {
            const data = await this.model.create(req.body);
            return this.success(res, 201, true, "Create successfully.", data);
        } catch (err) {
            return this.error(res, 500, false, err.message);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await this.model.update(id, req.body);

            if (!data) {
                return this.error(res, 404, false, "Data not found");
            }

            return this.success(res, 200, true, "Updated successfully.", data);
        } catch (err) {
            return this.error(res, 500, false, err.message);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await this.model.delete(id);

            if (!deleted) {
                return this.error(res, 404, false, "Data not found");
            }

            return this.success(res, 200, true, "Deleted successfully.");
        } catch (err) {
            return this.error(res, 500, false, err.message);
        }
    }

    success(res, statusCode, success, message, data = null) {
        return res.status(statusCode).json({
            statusCode,
            success,
            message,
            data
        });
    }

    error(res, statusCode, success, message) {
        return res.status(statusCode).json({
            statusCode,
            success,
            message
        });
    }
}