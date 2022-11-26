import express from "express";
import FirmData from "../models/FirmModel.js";
import puppeteer from 'puppeteer';

import UserSlips from "../models/ChequeSlips.js"
import auth from "./Auth.js";
import Chequeslips from "../models/ChequeSlips.js";

const router = express.Router();
var data = [];
var samplepdf = "";

router.post("/chequeprint",auth, async (req, res,next) => {
    console.log("me hu req.body2",req.body.dataa)
    const dataa=req.body.dataa
    console.log("me hu req.body ",dataa)
    // slipid = req.body._id;
    // console.log("sssssssssss",slipid);


  
    
// dataa.map(element => {
//     var totalchqamount=0;
//     console.log("me hu element ",element.amount)
    
//  console.log(parseInt(totalchqamount) + parseInt(element.amount));
//  console.log("me hu totalchqamount",totalchqamount)
    
// });
// var result = dataa.reduce(function(tot, arr) { 
//     // return the sum with previous value
//     return tot + arr.amount;
  
//     // set initial value as 0
//   },0);

//   console.log("me hu result",result)

  const result=total(dataa)

  function total(dataa) {
    if(!Array.isArray(dataa)) return;
    let totalNumber = 0;
    for (let i=0,l=dataa.length; i<l; i++) {
       totalNumber+=dataa.amount;
    }
    return totalNumber;
  }
  
  data.push(dataa) ;
  // res.status(200).send({ CashSlips});
 var quantity=dataa.length
console.log("me hu quantity",quantity)
  console.log("hellllll",data);

  var firmname = dataa[0]?.firmname;
  var branchname = dataa[0]?.branch;
//   var accountno = data[0][0]?.account;
  var date = new Date(data[0][0]?.depositdate).toLocaleDateString('es-CL');
  var totalamount = data[0][0]?.totalamount;
 




  samplepdf = await samplepdfFunc(firmname,
                              branchname,
                              date,
                              totalamount,
                              result,
                              quantity,
                             
                              dataa
                            )
                            try {
                                // Create a browser instance
                                const browser = await puppeteer.launch();
                              
                                // Create a new page
                                const page = await browser.newPage();
                              
                              
                                await page.setContent(samplepdf, {encoding : 'utf-8', waitUntil:'domcontentloaded' });
                              
                                // To reflect CSS used for screens instead of print
                                await page.emulateMediaType('screen');
                              
                                // Downlaod the PDF
                                const pdf = await page.pdf({
                                   path: 'result.pdf',
                                  // margin: { top: '50px', right: '50px', bottom: '0px', left: '50px' },
                                  format: 'A4',
                                  printBackground: true,
                                  landscape : true,
                                });
                    
                                    // Close the browser instance
                                    await browser.close();
                                    console.log("pddddddf")
                                res.send(pdf);
                              
                            
                              
                           
                        } catch (error) {
                            console.log(error)
                        }



  
});



function samplepdfFunc(firmname,
  branchname,
  date,
  totalamount,
  result,
  quantity,
    dataa
){

  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      *{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0.8rem;
  }
  
  body{
    background-color: aliceblue;
  }
  
  /*A4 page size 1200X848  */
  
  .page{
    width: 1200px;
    height: 424px;/* half of page */
    display: flex;
    background-color: white;
  }
  .left-container,
  .right-container{
    padding: 10px;
  }
  
  .left-container{
    border-right: 1px dashed #ccc;
  }
  
  /* left part of payslip  */
  
  .left{
    width: 320px;
    height: auto;
    border: 1px solid rgb(0, 0, 0);
  }
  
  .left > div{
    padding: 2px;
  }
  
  .left .logo{
    height: 80px;
  }
  
  .logo{
    display: flex;
    justify-content: space-between;
    padding: 4px;
  }
  
  .logo img{
    width: auto;
    height: 60px;
  }
  
  .left .logo .sbi p{
    text-align: right;
    font-weight: bold;
    font-size: 1.1rem;
  }
  
  .logo .sbi p{
    text-align: right;
    font-weight: bold;
    font-size: 1rem;
  }
  
  .left .date{
    display: flex;
    justify-content: flex-end;
  }
  
  .left .accountno{
    display: flex;
    font-weight: bold;
  }
  
  .left .accountno .blocks{
    display: flex;
  }
  
  .left .blocks .block{
    width: 22px;
    flex: 1;
    border: 1px solid rgb(77, 77, 77);
  }
  
  .left .creditof{
   display: flex;
  }
  
  .left .creditof p,
  .left .creditof p span{
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: bold;
  }
  
  .left .amount p{
    font-size: 1rem;
    font-weight: bold;
  }
  
  .left .details{
    padding: 0;
  }
  .left .details table{
    width: 100%;
    border-collapse: collapse;
  }
  
  .left .details table th{
    border: 1px solid #333;
  }
  
  .left .details table tr td{
    height: 18px;
    border: 1px solid #333;
  }
  
  .left .details table tr td:first-child{
    width: 70%;
  }
  
  .left .sign{
    width: 100%;
    display: flex;
    padding: 0;
  }
  
  .left .sign .cashier{
    flex: 1;
    border: 1px solid #333;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .left .sign .cash-passing-officer{
    flex: 1;
    border: 1px solid #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: 10px;
  }
  
  /* right part of payslip  */
  
  .right{
    width: 100%;
    height: auto;
    border: 1px solid blue;
    padding: 0;
  }
  
  
  .right .top{
    width: 840px;
    display: flex;
    border-bottom: 1px solid black;
  }
  
  .right .logo{
    flex: 2;
    border-right: 1px solid black;
    padding: 4px;
  }
  
  .right .logo .imageStyle{
    width: auto;
    height: 40px;
    background-color: black;
    border: 1px solid red;
  }
  
  .right .logo sm-file> img{
    width: auto;
    height: 40px;
  }
  
  .right .date{
    position: relative;
    flex: 4;
  }
  
  .right .date .dinank{
    position: absolute;
    top: 10px;
    right: 10px;
  }
  
  .right .date .note{
    padding: 4px;
    font-weight: bold;
  }
  
  .right .account{
    width: 100%;
    height: 60px;
    display: flex;
    border-bottom: 1px solid black;
  }
  
  .right .account .account-name{
    width: 420px;
    padding: 4px;
  }
  
  .right .account .account-number{
    border-left: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .right .account .account-number .blocks{
    display: flex;
  }
  
  .right .account .account-number .blocks .boxes{
    display: flex;
  }
  
  .right .account .account-number .blocks .boxes .box{
    border: 1px solid black;
    width: 24px;
    height: 24px;
  }
  
  .right .table table{
    width: 100%;
    border-collapse: collapse;
  }
  
  .right .table .header{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding-block: 5px;
    font-weight: bold;
  }
  
  .right .table table tr{
    border-bottom: 1px solid #ddd;
  }
  
  th, td{
    margin: 0;
    padding: 2px; 
    border: solid 1px #777;
  }
  
  .right .table table tr td:nth-child(4),
  .right .table table tr td:nth-child(5){
    text-align: right;
  }
  
  .right .table table .bottom-2 p{
    width: 50%;
    float: left;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  
  .right .last-row th{
    text-align: left;
  }
  
  .right .last-row th p span{
    display: block;
  }
  
  .right .last-row th:nth-child(4){
    text-align: right;
  }
  
  .right .table .ammount{
    width: 120px;
  }
  
  .right .table .ammount .rupee{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .applicable{
    font-weight: bold;
  }

  .borderbottom11{
    border-bottom : 1px solid blue;
  }
  
    </style>
  </head>
  <body>
    <div class="a4">
      <div class="page">
        <div class="left-container">
          <div class="left">
            <div class="logo">
              <img src="data:image/png;base64,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" alt="image uploaded">
              <div class="sbi">
                <p>State Bank Of India</p>
                <p>भारतीय स्टेट बैंक</p>
                <p>${branchname}, Branch शाखा</p>
              </div>
            </div>
          <div class="date">
            <p>Date दि.‌${date}</p>
          </div>
          <div class="accountno">
            <small>A/c No.</small>
            <div class="blocks">
              <div class="block">1</div>
              <div class="block">1</div>
              <div class="block">1</div>
              <div class="block">1</div>
              <div class="block">1</div>
              <div class="block">1</div>
              <div class="block">1</div>
              <div class="block">1</div>
              <div class="block">1</div>
              <div class="block">1</div>
              <div class="block">1</div>
              <div class="block">1</div>
              <div class="block">1</div>
            </div>
          </div>
          <div class="creditof">
            <p>
              <span>For The Credit Of </span>
              <span>के खाते में जमा करने हेतु </span>
            </p>
            <p class="borderbottom">${firmname}</p>
            <span >____________________________</span>
          </div>
          <div class="amount">
            <p>
              <span>Amount(in words) Rupees</span>
              <span >____________________________</span>
            </p>
            <p>
              <span>रु. (शब्दों में) </span>
              <span class="borderbottom"></span>
            </p>
          </div>
          <div class="details">
            <table>
              <tr>
                <th class="cheque">
                  <p>Details Of Cash/Cheques</p>
                  <p> रोकड / चेकों का विवरण </p>
                </th>
                <th> 
                  <p>₹</p>
                  <p>रु</p> 
                </th>
                <th>
                  <p>P.</p>
                  <p>पै</p>
                </th>
              </tr>
              <tr>
               <td>${quantity} No. of cheques</td>
               <td></td>
               <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
               </tr>
               <tr>
                <td></td>
                <td></td>
                <td></td>
               </tr>
               <tr>
                <td></td>
                <td></td>
                <td></td>
               </tr>
               <tr>
                <td></td>
                <td></td>
                <td></td>
               </tr>
               <tr>
                <td>कुल रुपये Total ₹</td>
                <td>${result}</td>
                <td></td>
               </tr>
            </table>
          </div>
          <div class="sign">
            <div class="cashier">
              <p>Cashier </p>
            </div>
            <div class="cash-passing-officer">
              <p>Cash/Passing Officer </p> 
              <p>रोकड / पासकर्ता अधिकारी </p> 
            </div>
          </div>
        
          </div>
        </div>
        <div class="right-container">    
          <div class="right">
          <div class="top">
            <div class="logo">
              <img src="data:image/png;base64,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" alt="image uploaded">
              <div class="sbi">
                <p>State Bank Of India</p>
                <p>भारतीय स्टेट बैंक</p>
                <p>${branchname}, Branch शाखा</p>
              </div>
            </div>
            <div class="date">
              <div class="dinank">
                <p>
                  <span>Date</span>
                  <span>दिनांक</span>
                  <span>${date}</span>
                  <span>20</span>
                  <span>__</span>
                </p>
              </div>
              <p>CA/SB/RD/CC/DL/TL Account pay-in-slip</p>
              <p>चालू/बचत/आवर्ती जमा खाता/कैश क्रेडिट/मांग ऋृण/सावधि ऋृण खाता जमा पर्ची</p>
              <p>Note : please use seperate slip for depositing Cash and cheques, Drafts etc.</p>
              <p>नोट : कृपया नगद तथा चेक, ड्राफ्ट आदि को जमा करने हेतू अलग पर्ची का उपयोग करें.</p>
            </div>
          </div>
          <div class="account">
            <div class="account-name">
              <p>
                <span>For the Credit of the Account of (Name)</span>
                <span class="borderbottom">${firmname}</span>
              </p>
              <p>
                <span>के खाते में जमा करने हेतु(नाम)</span>
                <span>_________________________________</span>
              </p>
              <p>
                <span>Amount(in words)Rupees</span>
                <span>_________________________________</span>
              </p>
              <p>
                <span>रु. (शब्दों में)</span>
                <span>_________________________________</span>
              </p>
            </div>
            <div class="account-number">
              <p>Instalment for *के लिए किस्त*</p>
              <div class="blocks">
                <p>
                  <span>A/c No</span>
                  <span>खाता क्र.</span>
                </p>
                <div class="boxes">
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="table">
            <div class="header">
              <p>PARTICULARS OF विवरण</p>
              <p>CHEQUES चेक्स</p>
              <p>CASH नगद</p>
            </div>
            <table>
              <thead>
                <tr>
                  <th class="cheque">
                    <p>Drawn on bank</p>
                    <p>अदाकर्ता बैंक</p>
                  </th>
                  <th> 
                    <p>Branch</p>
                    <p>शाखा</p> 
                  </th>
                  <th>
                    <p>Cheque No.</p>
                    <p>चेक नं</p>
                  </th>
                  <th>
                    <p>Casti Notes</p>
                    <p>रोकड नोट्स</p>
                  </th>
                  <th>
                    <p>Amount</p>
                    <p>राशि</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>${quantity} No. Of Cheques</td>
                  <td></td>
                  <td X2000</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>X500</td>
                  <td> </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>X200</td>
                  <td> </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td X100</td>
                  <td>} </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td> X50</td>
                  <td> </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td> X20</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td> X10</td>
                  <td> </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Coins</td>
                  <td> </td>
                </tr>
                <tr>
                  <th rowspan="2" class="bottom-2">
                    <p>
                      <span>Cashier's Scroll No.</span>
                      <span>रोकडिया/ सारण क्र. अंतरण</span>
                    </p>
                    <p>
                      <span>Cashier</span>
                      <span>रोकडिया</span>
                    </p>
                  </th>
                  <th rowspan="2" class="bottom-2">
                    <p>
                      <span>Cash/Passing Officer</span>
                      <span>रोकड/पासकर्ता अधिकारी</span>
                    </p>
                    <p>
                      <span>Jotting Book</span>
                      <span>सूची वही</span>
                    </p>
                  </th>
                  <th rowspan="2" class="bottom-2">
                    <p>
                      <span>Partition No.</span>
                      <span>विभाजनन क्र.</span>
                    </p>
                  </th>
                  <th>
                    <p>
                      <span>Total ₹ कुल रुपये</span>
                    </p>
                  </th>
                  <th>
                      <h2>${result} </h2>
                  </th>
                </tr>
                <tr>
                  <th>
                   
                  </th>
                  <th>
                   
                  </th>
                </tr>
                <tr>
                  <th rowspan="2">
                    <p>Home Br / होम ब्रांच</p>
                  </th>
                  <th rowspan="2">
                    <p>PAN No. / पेन क्र.</p>
                  </th>
                  <th rowspan="2" colspan="2">
                    <p>Mob./Tel. No./मो./टेलि क्र.</p>
                  </th>
                  <th rowspan="2">
                    <p>
                      Deposited by(Signature)
                      जमाकर्ता के हस्ताक्षर
                    </p>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        
          </div>
        </div>
      </div>
  </body>
  </html>
  `
}


;


export default router;
export {data, samplepdf}
