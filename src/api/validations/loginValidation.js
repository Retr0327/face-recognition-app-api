import { checkSchema, validationResult } from "express-validator";

const loginValidator = async (req, res, next) => {
  await checkSchema({
    userEmail: {
      notEmpty: {
        errorMessage: "Missing email",
      },
    },
    password: {
      notEmpty: {
        errorMessage: "Missing password",
      },
    },
  }).run(req);

  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.json(result.errors);
  }

  return next();
};

export default loginValidator;
