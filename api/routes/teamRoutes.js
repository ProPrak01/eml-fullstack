import express from "express";
import { addTeammate, getTeamByYear } from "../controllers/teamController.js";
const router = express.Router()

router.get("/:year", getTeamByYear)
router.post("/", addTeammate);



export default router;