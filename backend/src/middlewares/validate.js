export function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      allowUnknown: false,
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({
        message: "요청 값이 올바르지 않습니다.",
        details: error.details.map((d) => ({
          message: d.message,
          path: d.path,
        })),
      });
    }

    req.validatedBody = value;
    return next();
  };
}


