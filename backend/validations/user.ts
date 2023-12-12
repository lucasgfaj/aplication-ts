import { body } from "express-validator";

export const userStoreValidate = [
  body("firstName").escape().not().isEmpty().withMessage("Nome obrigatório"),
  body("LastName")
    .escape()
    .not()
    .isEmpty()
    .withMessage("Sobrenome é obrigatório"),
  body("email")
    .escape()
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Email não é válido"),
  body("password")
    .escape()
    .not()
    .isEmpty()
    .withMessage("Password é obrigatório"),
];
