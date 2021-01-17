var DataTypes = require("sequelize").DataTypes;
var _role = require("./role");
var _role_user = require("./role_user");
var _user = require("./user");

function initModels(sequelize) {
    var role = _role(sequelize, DataTypes);
    var role_user = _role_user(sequelize, DataTypes);
    var user = _user(sequelize, DataTypes);

    role_user.belongsTo(role, { foreignKey: "role_id" });
    role.hasMany(role_user, { foreignKey: "role_id" });
    role_user.belongsTo(user, { foreignKey: "user_id" });
    user.hasMany(role_user, { foreignKey: "user_id" });

    return {
        role,
        role_user,
        user,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;