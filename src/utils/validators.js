const Joi = require('joi');

const validateAddSchool = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        address: Joi.string().min(3).required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required()
    });
    return schema.validate(data);
};

module.exports = { validateAddSchool };
