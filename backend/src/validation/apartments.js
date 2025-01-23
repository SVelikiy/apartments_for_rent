import Joi from "joi";

export const apartmentAddSchema = Joi.object({
  title: Joi.string().required().min(3).max(90),
  info: Joi.string().required().min(3).max(335),
  price: Joi.number().required().integer().min(1),
  rooms: Joi.number().required().integer().min(1).max(3),
});

export const apartmentUpdateSchema = Joi.object({
  title: Joi.string().min(3).max(90),
  info: Joi.string().min(3).max(335),
  price: Joi.number().integer().min(1),
  rooms: Joi.number().integer().min(1).max(3),
});
