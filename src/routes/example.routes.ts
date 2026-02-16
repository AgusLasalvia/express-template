import { Router } from "express";

const router = Router();

import ExampleController from "../controllers/example.controller";

const controller = new ExampleController();

router.get("/example", controller.exampleMethod);

export default router;