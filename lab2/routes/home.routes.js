import data from "../data/mydata.js";
import { Router } from "express";

const router = Router();

// api

/* required */
router.get("/getCategories", (_, res) =>
  res.send(
    data.categories.map((cat) => {
      return {
        id: cat.id,
        name: cat.name,
      };
    }),
  ),
);

/* required */
router.get("/getCategories/:id", (req, res) =>
  res.send(data.categories[parseInt(req.params.id)]),
);

export default router;
