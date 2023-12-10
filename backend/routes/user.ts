import express from "express";

// Controllers
import { store } from "../controllers/User";

const router = express.Router();

router.get("/", store);

export default router;
