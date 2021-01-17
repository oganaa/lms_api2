const path = require("path");
const rootPath = path.normalize(__dirname + "/..");
const env = process.env.NODE_ENV || "development";

const config = {
    host: 'localhost',
    development: {
        root: rootPath,
        app: {
            name: "nuxt-express-template"
        },
        port: process.env.PORT || 3000,
        db: "mysql://root:1234@localhost:3306/amazon"
    },

    test: {
        root: rootPath,
        app: {
            name: "nuxt-express-template"
        },
        port: process.env.PORT || 3000,
        db: "mysql://root:1234@localhost:3306/amazon"
    },

    production: {
        root: rootPath,
        app: {
            name: "nuxt-express-template"
        },
        port: process.env.PORT || 3000,
        db: "mysql://root:1234@localhost:3306/amazon"
    }
};

module.exports = config[env];