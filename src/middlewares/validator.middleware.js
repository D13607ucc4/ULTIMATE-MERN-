// NO LOGRO HACER QUE FUNCIONE CORRECTAMENTE
// LAS VALIDACIONES CON ZOD

export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.safeParse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// import { ZodError } from "zod";

// export const validateSchema = (schema) => (req, res, next) => {
//   try {
//     schema.parse(req.body);
//     next();
//   } catch (error) {
//     if (error instanceof ZodError) {
//       return res.status(400).json({
//         errors: error.errors.map((err) => err.message),
//       });
//     }

//     console.error(error);
//     return res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };

// export const validateSchema = (schema) => (req, res, next) => {
//   const result = schema.safeParse(req.body);

//   if (!result.success) {
//     return res.status(400).json({
//       errors: result.error.issues.map((issue) => issue.message),
//     });
//   }

//   // opcional: body ya validado
//   req.body = result.data;

//   next();
// };
