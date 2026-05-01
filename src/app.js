import express from "express";
import userRoutes from "./routes/userRoutes.js";
import Database from "./config/db.js";

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


//Routes
app.use("/", userRoutes);

//Make sure database connected
async function startServer() {
    try {
        await Database.pool.getConnection();
        console.log("Connected to MySQL database");
    } catch (error) {
        console.log("Database connection failed");
        console.log(error.message);
    }
}

//Start server
startServer();
app.listen(3000, () => {
    console.log("Server runing on port http://localhost:3000")
});
