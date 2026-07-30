import { email } from "zod";
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    //lelly
    lastName : {
        type : DataTypes.STRING,
        allowNull : false
    },
    // mohammed
    firstName : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    },
    reafreshToken : {
        type : DataTypes.STRING
    }
},
{
    tableName : "user",
    timestamps : true
}
);
export default User;