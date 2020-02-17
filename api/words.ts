import express from "express";
import { getWords } from "../services/words";

const router = express.Router();

router.get("/words", (req: any, res: any) => {
  const optional = req.query.optional || "";
  const required = req.query.required || "";
  const excluded = req.query.excluded || "";

  res.json(getWords(optional.split(""), required.split(""), excluded.split("")));
});

export default router;
