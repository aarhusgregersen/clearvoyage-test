import express from "express";
import { portsService } from "./services/ports.service.js";
import { vesselsService } from "./services/vessels.service.js";
import { seaRoutesService } from "./services/seaRoutes.service.js";
import cors from "cors";
import { router } from "./routes.js";

const app = express();
const port = 3002;

// * I probably would include some basic middleware to help professionalise the application.
// * Development logging output via morgan, perhaps another logger for other envs, and helmet for security
// app.use(helmet())
// app.use(morgan())
// app.use(rateLimit())

app.use(cors());

// Support application/json
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
