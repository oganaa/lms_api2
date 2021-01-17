const paginate = require('../../utils/paginate')
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

        let role_user = await MODELS.user.findByPk(req.params.id);
        res.status(200).json({
            success: true,
            user: role_user,
            magic: Object.keys(MODELS.user.prototype),
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
exports.getRoles = async(req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 4;

        const sort = req.query.sort;
        let select = req.query.select;
        if (select) {
            select = select.split(' ');
        }
        ["select", "sort", "page", "limit"].forEach((el) => delete req.query[el]);
        const pagination = await paginate(page, limit, MODELS.role_user);

        let query = { offset: pagination.start - 1, limit: limit }
        if (req.query) {
            query.where = req.query
        }
        if (select) {
            query.attributes = select;
        }
        if (sort) {
            query.order = sort.split(' ').map((el) => [el.charAt(0) === "-" ? el.substring(1, el.length) : el, el.charAt(0) === "-" ? "DESC" : "ASC"])

        }
        let role_user = await MODELS.role_user.findAll(query);

        res.status(200).json({
            success: true,
            query,
            message: role_user,
            pagination
        })
    } catch (err) {
        res.status(400).send({ message: `${err.message} ` })
    }

}