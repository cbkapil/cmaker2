import FirmData from "../models/FirmModel.js";
import UserData from "../models/UserData.js";
import express from "express";
import auth from "./Auth.js";
import UserBranch from "../models/UserBranch.js";
const router = express.Router();

router.post("/createFirm", auth, async (req, res) => {
  console.log(req.userId);
  const {
    firmname,
    email,
    gstin,
    pancard,
    address,
    city,
    state,
    pincode,
    phonenumber,
    formvalues
  } = req.body;
  console.log(firmname);

  try {
    const data = new FirmData({
      firmname: firmname,
      email: email,
      gstin: gstin,
      pancard: pancard,
      address: address,
      city: city,
      state: state,
      pincode: pincode,
      phonenumber: phonenumber,
      

      userid: req.userId,
    });
    const dataRegister = await data.save();
    console.log("lol", dataRegister);

    const firmid = dataRegister._id;

    let usersid = dataRegister.userid;
    console.log(firmid);

    const firmlink = UserData.findOneAndUpdate(
      usersid,
      { $push: { firmid: firmid } },
      function (err, data) {
        if (err) throw err;
        else if (data) {
          console.log("firm linked to user");
          console.log("firmlink", data);
        }
      }
    );

    try {

      const userPromises = formvalues.map(user => {
        return new Promise((resolve, reject) => {
          const dataa = new UserBranch({
            userid: usersid,
            firmname: firmname,
            firmid: firmid,
            bank: user.bankname,
            branch: user.branch,
            ifsc: user.ifsc,
            account: user.accountno,
          });
          
          dataa.save((error, result) => {
            if (error) {
              reject(error)
            } else{
            resolve(result)
          console.log('kkkkkk',result)
          const banklink = FirmData.findOneAndUpdate(
                      firmid,
                      { $push: { bankLink: result._id } },
                      function (err, result) {
                      if (err) reject();
                        resolve(result)
                      }
                    );};
          })
        })
      });
      
      // Promise.all(userPromises).then((results) => {
      //    console.log(results)
      //    var temparray=[]
      //    results.forEach((item)=>{
      //     temparray.push(item._id)
          
      //     const userPromisess = temparray.map(user => {
      //       return new Promise((resolve, reject) => {
      //         const banklink = FirmData.findOneAndUpdate(
      //           firmid,
      //           { $push: { bankLink: temparray } },
      //           function (err, result) {
      //             if (err) reject();
      //             resolve(result)
      //           }
      //         );
      //       })
      //     });
          
      //     Promise.all(userPromises).then((results) => {
      //       console.log('hahahahaaaa',results)
      //     }, (error) => {
      //       console.log(error)
      //     })
         
      //    })
      // }, (error) => {
      //   console.log(error)
      // })
      
     
      // console.log("lol", dataRegisterr);
      // const branchid = dataRegisterr._id;

      
    } catch (error) {}

    res
      .status(200)
      .json({ message: "Firm Data added", status: true, firmid: firmid });
  } catch (err) {
    console.log(err);
  }
});

export default router;
