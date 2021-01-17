const express = require("express");
const router = express.Router();

router.use("/user", require("./user.js"));

const { getRoles, getRoleUsers, getRoleUser, createRoleUser, updateRoleUser, deleteRoleUser } = require('../controller/role_user')
router.route('/roles/').post(createRoleUser);
router.route('/roles/:id').get(getRoleUser).put(updateRoleUser).delete(deleteRoleUser);
router.route('/roles/').get(getRoles)
module.exports = router;