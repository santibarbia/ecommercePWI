const Joi = require('@hapi/joi');


const schema = {
    login: Joi.object().keys({
        username: Joi.string().required(),
        pass: Joi.string().required().min(4).max(20)
    }),
    registro: Joi.object().keys({
        username: Joi.string().required,
        pass: Joi.string().required().min(4).max(20),
        email: Joi.string().required().email(),
        telefono: Joi.number().required()
    })
}

module.exports ={schema};