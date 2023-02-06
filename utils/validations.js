import Joi from "joi";

export const registerValidation = (data) => {
    const Schema = Joi.object({
        firstName: Joi.string().min(2).max(255).required(),
        lastName: Joi.string().min(2).max(255).required(),
        email: Joi.string().min(5).max(255).email().required(),
        password: Joi.string().min(4).max(255).required(),
    });
    return Schema.validate(data);
};

export const projectValidation = (data) => {
    const Schema = Joi.object({
        title: Joi.string().min(2).max(255).required(),
        description: Joi.string().min(100).required,
        previewLink: Joi.string().link().required(),
        githubLink: Joi.string().link().required(),
    });
    return Schema.validate(data);
};
