import { ErrorRequestHandler } from "express";
// export const errorHandler:ErrorRequestHandler = (error, req, res, next) => {
//     console.log(`PATH: ${req.path}`, error)
//     return res.status(500).send("Internal Server Error.");
// }

//@ts-ignore
export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    console.log(`PATH ${req.path}`, error);
  
    // if (req.path === REFRESH_PATH) {
    //   clearAuthCookies(res);
    // }
  
    // if (error instanceof z.ZodError) {
    //   return handleZodError(res, error);
    // }
  
    // if (error instanceof AppError) {
    //   return handleAppError(res, error);
    // }
  
    return res.status(500).send("Internal server error");
  };


