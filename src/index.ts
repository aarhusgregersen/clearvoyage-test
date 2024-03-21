import express from "express";
import { portsService } from "./services/ports.service.js";
import { vesselsService } from "./services/vessels.service.js";
import { seaRoutesService } from "./services/seaRoutes.service.js";

const app = express();
const port = 3002;

// app.use(helmet())
// app.use(morgan())
// app.use(rateLimit())

// Support application/json
app.use(express.json());

app.get("/ports", async (req, res, next) => {
  const ports = await portsService.list();

  return res.json({
    success: true,
    data: ports,
    message: "GET Ports succes",
  });
});

app.get("/vessels", async (req, res, next) => {
  const ports = await vesselsService.list();

  return res.json({
    success: true,
    data: ports,
    message: "GET Vessels succes",
  });
});

app.get("/sea-route", async (req, res, next) => {
  const ports = await seaRoutesService.find();

  return res.json({
    success: true,
    data: ports,
    message: "GET Sea Route succes",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
