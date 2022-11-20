import UserBranch from "../models/UserBranch.js";
import UserData from "../models/UserData.js";
import express from "express";
import FirmData from "../models/FirmModel.js";
import auth from "./Auth.js";

const router = express.Router();
router.post("/banklinking", auth, async (req, res) => {
  const { ifsc, bankname, branchname, account, firmid } = req.body;
  console.log(req.userId);
  const data = new UserBranch({
    ifsc: ifsc,
    bank: bankname,
    branch: branchname,
    account: account,
    firmid: firmid,
    userid: req.userId,
  });
  try {
    const bankexist = await UserBranch.findOne({
      $and: [
        { userid: req.userId },
        { firmid: firmid },
        { branch: branchname },
        { bank: bankname },
      ],
    });
    if (!bankexist) {
      const dataRegister = await data.save();
      console.log("lol", dataRegister);
      let bankid = dataRegister._id;

      const branchlink = FirmData.findByIdAndUpdate(
        firmid,
        { $push: { bankLink: bankid } },
        function (err, data) {
          if (err) throw err;
          else if (data) {
            console.log("Bank Linked to Your Firm");
            console.log("firmlink", data);
          }
        }
      );

      res.status(201).json({ message: "Firm Data added", status: true });
    } else
      res.json({ message: "Same bank branch for this user already exist" });
  } catch (error) {}
});

export default router;
