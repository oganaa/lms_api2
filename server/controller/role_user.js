exports.getRoleUsers = async(req, res, next) => {
    try {
        let users = await MODELS.role_user.findAll();
        res.status(200).json({
            success: true,
            message: users,
        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }
}
exports.createRoleUser = async(req, res, next) => {
    try {

        let newRoleUser = await MODELS.role_user.create(req.body);
        res.status(200).json({
            success: true,
            message: newRoleUser,

        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }

}

exports.getRoleUser = async(req, res, next) => {
    try {

        let role_user = await MODELS.role_user.findByPk(req.params.id);
        res.status(200).json({
            success: true,
            message: role_user,
        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }

}
exports.updateRoleUser = async(req, res, next) => {
    try {

        let role_user = await MODELS.role_user.findByPk(req.params.id);
        let updateRole = await role_user.update(req.body)
        res.status(200).json({
            success: true,
            message: updateRole,
        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }

}
exports.deleteRoleUser = async(req, res, next) => {
    try {

        let role_user = await MODELS.role_user.findByPk(req.params.id);

        let deleteRole = await role_user.destroy()
        res.status(200).json({
            success: true,
            message: deleteRole,
        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }

}