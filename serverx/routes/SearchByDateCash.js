import CashSlips from "../models/UserSlips.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.post("/searchbydatecash", auth, async (req, res) => {
  
  
  const slipexist = await CashSlips.find({
    $and: [{ depositdate: {$gt:req.body.startDate,$lt:req.body.endDate} }, { userid: req.userId }],
  });
  if (slipexist) {
    return res.status(200).send(slipexist);
  } else {
    res.json({
      message: "error",
      status: false,
      
    });
  }
});

export default router;