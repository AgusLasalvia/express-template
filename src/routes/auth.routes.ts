import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const controller = new AuthController();

const router = Router();

router.post("/login", controller.login)

export default router;