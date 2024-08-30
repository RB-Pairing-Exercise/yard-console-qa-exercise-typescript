import { RequestHandler } from "express";
import { dbSeeder } from "../utils/dbSeeder";

export const getData: RequestHandler = (req, res) => {
  const query = req.query;

  const type = (query.type as "yard" | "equipment") ?? "equipment";
  const length = parseInt((query.length as string) ?? 10);

  if (!type || !["equipment", "yard"].includes(type as string))
    res.status(404).json({ error: true, message: "incorrect type" });
  res.json(dbSeeder(type, length));

  res.json({ type, length });
};
