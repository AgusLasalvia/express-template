import express, { type Application } from "express";

const app: Application = express();

import { SYSTEM } from "./src/config/env.config";
import exampleRoutes from "./src/routes/example.routes";

app.use(express.json());
app.use("/api", exampleRoutes);

app.listen(SYSTEM.PORT, () => {
    console.log(`Server is running on port ${SYSTEM.PORT}`);
});
