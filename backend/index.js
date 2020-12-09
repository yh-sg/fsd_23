const express = require("express")
const secureEnv = require("secure-env")
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql2/promise")

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(bodyParser.json({limit: '50mb'}))

global.env = secureEnv({secret: 'mySecret'})

const PORT = global.env.APP_PORT;

const pool = mysql.createPool({
    host: global.env.MYSQL_SERVER,
    port: global.env.MYSQL_SVR_PORT,
    user: global.env.MYSQL_USERNAME,
    password: global.env.MYSQL_PASSWORD,
    database: global.env.MYSQL_SCHEMA,
    connectionLimit: global.env.MYSQL_CON_LIMIT,
});

