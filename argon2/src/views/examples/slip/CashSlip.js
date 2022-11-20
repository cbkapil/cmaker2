// import React from "react";
// import {
//   Button,
//   FormGroup,
//   Form,
//   Input,
//   Table,
//   Container,
//   Row,
//   Col,
// } from "reactstrap";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";

// const CashSlip = () => {
//   return (
//     <>
//       <Form className="p-1 ">
//         <Row className="mt-0">
//           <Col lg="4">
//             <label className="form-control-label" htmlFor="input-email">
//               FIRM NAME
//             </label>
//             <Autocomplete
//               disablePortal
//               id="combo-box-demo"
//               options={firmdata}
//               sx={{ width: 300 }}
//               renderInput={(params) => (
//                 <TextField {...params} label=" Select Firm" />
//               )}
//               getOptionLabel={(option) => option?.firmname}
//               onChange={(e, value) => {
//                 setfirmid(value._id);
//               }}
//             />

//             <label className="form-control-label" htmlFor="input-email">
//               BANK NAME
//             </label>
//             <Autocomplete
//               disablePortal
//               id="combo-box-demo"
//               options={!bankdata ? <div>loading...</div> : bankdata}
//               sx={{ width: 300 }}
//               renderInput={(params) => (
//                 <TextField {...params} label=" Select Bank" />
//               )}
//               onChange={(e, value) => {
//                 setbankid(value);
//               }}
//             />

//             <label className="form-control-label" htmlFor="input-email">
//               BRANCH NAME
//             </label>

//             <Autocomplete
//               disablePortal
//               id="combo-box-demo"
//               options={
//                 !branchdata ? [{ label: "Loading...", id: 0 }] : branchdata
//               }
//               sx={{ width: 300 }}
//               renderInput={(params) => (
//                 <TextField {...params} label=" Select Branch" />
//               )}
//               getOptionLabel={(option) => option?.branch}
//               onChange={(e, value) => {
//                 setaccountfin(value.account);
//                 setbranchid(value.branch);
//               }}
//             />

//             <FormGroup className="mb-3">
//               <Row>
//                 <Col>
//                   {" "}
//                   <label className="form-control-label" htmlFor="input-email">
//                     Account Number
//                   </label>
//                 </Col>
//                 <Col>
//                   {" "}
//                   <label className="form-control-label" htmlFor="input-email">
//                     {accountfin}
//                   </label>
//                 </Col>
//               </Row>
//             </FormGroup>

//             <FormGroup className="mb-3">
//               <Row>
//                 <Col>
//                   {" "}
//                   <label className="form-control-label" htmlFor="input-email">
//                     Doc Date
//                   </label>
//                 </Col>
//                 <Col>
//                   {" "}
//                   <Input
//                     className="form-control-alternative"
//                     defaultValue=""
//                     id="input-username"
//                     type="date"
//                     value={docdate}
//                     onChange={(e) => {
//                       setdocdate(e.target.value);
//                     }}
//                   />
//                 </Col>
//               </Row>
//             </FormGroup>

//             <FormGroup className="mb-3">
//               <Row>
//                 <Col>
//                   {" "}
//                   <label className="form-control-label" htmlFor="input-email">
//                     Deposit date
//                   </label>
//                 </Col>
//                 <Col>
//                   {" "}
//                   <Input
//                     className="form-control-alternative"
//                     defaultValue=""
//                     id="input-username"
//                     type="date"
//                     value={depositdate}
//                     onChange={(e) => {
//                       setdepositdate(e.target.value);
//                     }}
//                   />
//                 </Col>
//               </Row>
//             </FormGroup>
//           </Col>

//           <Col lg="8">
//             <Table className="align-items-center table-flush " responsive>
//               <thead className="thead-light gentabletbody ">
//                 <tr>
//                   <th scope="col">Sr.</th>
//                   <th scope="col">Note</th>
//                   <th scope="col">Qty</th>
//                   <th scope="col">Amount</th>
//                 </tr>
//               </thead>
//               <tbody className="gentabletbody">
//                 <tr>
//                   <td>1</td>
//                   <td>2000</td>
//                   <td>
//                     <Input
//                       className="form-control-alternative"
//                       defaultValue="0"
//                       id="input-username"
//                       type="number"
//                       min="0"
//                       //   max="100"
//                       value={amount2k}
//                       onChange={(e) => setAmount2k(e.target.value)}
//                     />
//                   </td>

//                   <td className="text-center">
//                     <h6>{amount2k * 2000}</h6>
//                   </td>
//                 </tr>

//                 <tr className="">
//                   <td>2</td>
//                   <td>500</td>
//                   <td>
//                     <Input
//                       className="form-control-alternative"
//                       defaultValue="0"
//                       id="input-username"
//                       type="number"
//                       min="0"
//                       //   max="100"
//                       value={amount500}
//                       onChange={(e) => setAmount500(e.target.value)}
//                     />
//                   </td>

//                   <td className="text-center">
//                     <h6>{amount500 * 500}</h6>
//                   </td>
//                 </tr>
//                 <tr className="m-0 p-0">
//                   <td>3</td>
//                   <td>200</td>
//                   <td>
//                     <Input
//                       className="form-control-alternative"
//                       defaultValue="0"
//                       id="input-username"
//                       type="number"
//                       min="0"
//                       //   max="100"
//                       value={amount200}
//                       onChange={(e) => setAmount200(e.target.value)}
//                     />
//                   </td>

//                   <td className="text-center">
//                     <h6>{amount200 * 200}</h6>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>4</td>
//                   <td>100</td>
//                   <td>
//                     <Input
//                       className="form-control-alternative"
//                       defaultValue="0"
//                       id="input-username"
//                       type="number"
//                       min="0"
//                       //   max="100"
//                       value={amount100}
//                       onChange={(e) => setAmount100(e.target.value)}
//                     />
//                   </td>

//                   <td className="text-center">
//                     <h6>{amount100 * 100}</h6>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>5</td>
//                   <td>50</td>
//                   <td>
//                     <Input
//                       className="form-control-alternative"
//                       defaultValue="0"
//                       id="input-username"
//                       type="number"
//                       min="0"
//                       //   max="100"
//                       value={amount50}
//                       onChange={(e) => setAmount50(e.target.value)}
//                     />
//                   </td>

//                   <td className="text-center">
//                     <h6>{amount50 * 50}</h6>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>6</td>
//                   <td>20</td>
//                   <td>
//                     <Input
//                       className="form-control-alternative"
//                       defaultValue="0"
//                       id="input-username"
//                       type="number"
//                       min="0"
//                       //   max="100"
//                       value={amount20}
//                       onChange={(e) => setAmount20(e.target.value)}
//                     />
//                   </td>

//                   <td className="text-center">
//                     <h6>{amount20 * 20}</h6>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>7</td>
//                   <td>10</td>
//                   <td>
//                     <Input
//                       className="form-control-alternative"
//                       defaultValue="0"
//                       id="input-username"
//                       type="number"
//                       min="0"
//                       //   max="100"
//                       value={amount10}
//                       onChange={(e) => setAmount10(e.target.value)}
//                     />
//                   </td>

//                   <td className="text-center">
//                     <h6>{amount10 * 10}</h6>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>8</td>
//                   <td>5</td>
//                   <td>
//                     <Input
//                       className="form-control-alternative"
//                       defaultValue="0"
//                       id="input-username"
//                       type="number"
//                       min="0"
//                       //   max="100"
//                       value={amount5}
//                       onChange={(e) => setAmount5(e.target.value)}
//                     />
//                   </td>

//                   <td className="text-center">
//                     <h6>{amount5 * 5}</h6>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>9</td>
//                   <td>Coins</td>
//                   <td>
//                     <Input
//                       className="form-control-alternative"
//                       defaultValue="0"
//                       id="input-username"
//                       type="number"
//                       min="0"
//                       //   max="100"
//                       value={amountCoins}
//                       onChange={(e) => setAmountCoins(e.target.value)}
//                     />
//                   </td>

//                   <td className="text-center">
//                     <h6>{amountCoins * 1}</h6>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td colspan="3" className=" text-right">
//                     <h1>TOTAL AMOUNT</h1>
//                   </td>
//                   <td className="text-center">
//                     <h1>{total}</h1>
//                   </td>
//                 </tr>
//               </tbody>
//             </Table>
//           </Col>
//         </Row>

//         <Button
//           className="companybutton"
//           variant="primary"
//           type="submit"
//           onClick={firmSubmit}
//         >
//           Generate Slip
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default CashSlip;
