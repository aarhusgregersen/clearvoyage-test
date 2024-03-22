import { Router } from "express";
import { portsService } from "./services/ports.service.js";
import { vesselsService } from "./services/vessels.service.js";
import { seaRoutesService } from "./services/seaRoutes.service.js";

export const router = Router();

// * As the app grows I would likely split this out further, into controllers, either in a separate /controllers folder, or using code colocation and using a resource-based structure
// * ie. creating /ports and putting all relevant files in here
router.get("/ports", async (req, res, next) => {
  const ports = await portsService.list();

  return res.json({
    success: true,
    data: ports,
    message: "GET Ports succes",
  });
});

router.get("/vessels", async (req, res, next) => {
  const ports = await vesselsService.list();

  return res.json({
    success: true,
    data: ports,
    message: "GET Vessels succes",
  });
});

router.post("/sea-route", async (req, res, next) => {
  const data = req.body;

  if (!data.vessel || !data.port) {
    return res.json({
      succes: false,
      message: "GET Sea Route Failed",
      error: "Missing coordinates",
    });
  }

  const ports = await seaRoutesService.find(data.vessel, data.port);

  return res.json({
    success: true,
    data: ports,
    message: "GET Sea Route succes",
  });
});
