import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.get("/health", (req: Request, res: Response, next: NextFunction) => {
  res.send("service status ok");
});


export default router