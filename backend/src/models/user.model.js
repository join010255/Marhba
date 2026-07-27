import { email } from "zod";
import sequelize from "../config/database";
import { DataTypes } from "sequelize";
import { frCA } from "zod/locales";

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
    userName : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
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
    role : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    createTime : {
        type : DataTypes.DATE
    },
    updateTime : {
        type : DataTypes.DATE
    }
});

export default User;