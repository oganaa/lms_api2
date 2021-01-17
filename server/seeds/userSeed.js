module.exports = {
    run: async() => {
        // console.log('----MODELS', MODELS)
        let users = await MODELS.user.findAll();
        if (users.length == 0) {
            users = [{
                    email: 'john@gmail.com',
                    password: '123'
                },
                {
                    email: 'edward@gmail.com',
                    password: '789',
                    role: "ADMIN"
                }
            ];
            await MODELS.user.bulkCreate(users)
        }
    }
};