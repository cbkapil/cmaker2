import Chequeslips from "../models/ChequeSlips.js";
import UserData from "../models/UserData.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.post("/createchequeslip", auth, async (req, res) => {
  console.log(req.userId);
  const {
   chequeFirmid,
   chequefirmname,
   formValues,
   
  } = req?.body;
  

  try {
    const userPromises = formValues.map(user => {
      return new Promise((resolve, reject) => {
        const dataa = new Chequeslips({
          firmname:chequefirmname,
           bank:user.bankname ,
          branch: user.branch,
          accountno:user.accountno ,
          partyname:user.customer,
          partybankname:user.customerbank,
          partybranchname:user.customerbranch,
          chequeno:user.chequeno,
          amount:user.amount,
          chequedate:user.chequedate,
          firmid:chequeFirmid,
          userid:req.userId,
          partyid:user.customerid
        });
        
        dataa.save((error, result) => {
          if (error) {
            reject(error)
          } else{
          resolve(result)
        console.log('kkkkkk',result)
         UserData.findByIdAndUpdate(
                    req.userId,
                    { $push: { chequeslips: result._id } },
                    function (err, result) {
                    if (err) reject();
                      resolve(result)
                    }
                  );};
        })
      })
    });

    res.status(201).json({ message: "Firm Data added", status: true });
  } catch (err) {
    console.log(err);
  }
});

export default router;
