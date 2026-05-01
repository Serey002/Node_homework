import mysql from "mysql2/promise";

class  Database {
    static pool = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        database: "node_homework",
        port: 3307
    });
}

export default Database;