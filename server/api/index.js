const express = require("express");
const router = express.Router();

router.use("/user", require("./user.js"));

const { getRoleUsers, getRoleUser, createRoleUser, updateRoleUser, deleteRoleUser } = require('../controller/role_user')
router.route('/roles/').get(getRoleUsers).post(createRoleUser);
router.route('/roles/:id').get(getRoleUser).put(updateRoleUser).delete(deleteRoleUser);

module.exports = router;