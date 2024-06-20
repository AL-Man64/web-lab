import { Router } from "express";
import sessionManager from "../sessionManagement.js";

const router = Router();

let messageNumber = 0;

function getSession(id, res) {
  let session = sessionManager.getSession(id);
  if (session === undefined) {
    session = sessionManager.createSession();
    res.cookie("sessionId", session.id());
    throw new Error("Session expired");
  }
  return session;
}

/* required route */
router.post("/add/:id", (req, res) => {
  let session = getSession(req.cookies.sessionId, res);
  let amt = session.addItem(parseInt(req.params.id));
  res.send({ amount: amt });
});

/* required route */
router.post("/remove/:id", (req, res) => {
  let session = getSession(req.cookies.sessionId, res);
  let amt = session.removeItem(parseInt(req.params.id));
  res.send({ amount: amt });
});

/* required route */
router.get("/getAll", (req, res) => {
  let session = getSession(req.cookies.sessionId, res);
  res.send(session.items());
});

router.get("/get/:id", (req, res) => {
  let session = getSession(req.cookies.sessionId, res);
  let amt = session.getItem(parseInt(req.params.id));
  res.send({ amount: amt });
});

export default router;
