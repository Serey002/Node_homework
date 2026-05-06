import express from "express";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import Database from "./config/db.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/users", userRoutes);
app.use("/products", productRoutes);

// Start server only after DB connects
async function startServer() {
    try {
        await Database.pool.getConnection();
        console.log("Connected to MySQL database");

        app.listen(3000, () => {
            console.log("Server running on http://localhost:3000");
        });

    } catch (error) {
        console.log("Database connection failed");
        console.log(error.message);
        process.exit(1);
    }
}

startServer();