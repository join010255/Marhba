import sequelize from "./config/database.js";
import express from "express";
import dotenv from "dotenv";

const main = async() => {
    const app = express()
    app.use(express.json())
    // add the routes

    try{
        await sequelize.authenticate()
        console.log("[+] database is conected");
        await sequelize.sync()
        console.log("[+] create tables");

        app.listen(3000, () => {
            console.log("[+] Server is Startd")
        })
    }catch(error){
        console.log(error);
    }
    
}
main();