// import React from "react";
// import Table from "react-bootstrap/Table";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const AxisBankSlip = () => {
//   return (
//     <>
//       <Row>
//         <Col sm={4}>
//           <Row className="bg-dark text-light p-2">
//             <Col>
//               <h6>AXIS BANK</h6>
//             </Col>

//             <Col>
//               <h6>Deposit/Pay in Slip</h6>
//             </Col>
//           </Row>

//           <Row>
//             <Col className="colDt">Date</Col>
//             <Col>25/09/2022</Col>
//           </Row>

//           <Row>
//             <Col>Branch</Col>
//             <Col className="masterName mb-4" sm={9}>
//               {" "}
//               KHEDSHIVAPUR
//             </Col>
//           </Row>

//           <Row className="MAccNo mb-2">
//             <Col>Acc No</Col>
//             <Col sm={9} className="MAccNodata">
//               911100852147
//             </Col>
//           </Row>

//           <Row className="mb-2">
//             <Col>Name</Col>
//             <Col sm={10} className="fw-bold">
//               Sonal{" "}
//             </Col>
//           </Row>

//           <Row className="mb-2">
//             <Col>Contact No. </Col>
//             <Col sm={8} className="masterName"></Col>
//           </Row>

//           <Row className="mb-2">
//             <Col>Amount </Col>
//             <Col sm={8} className="fw-bold text-center">
//               11520
//             </Col>
//           </Row>

//           <Row className="mb-2 ">
//             <Col sm={12} className="slipR">
//               Rupees in words{" "}
//             </Col>
//             <Col sm={12} className="fw-bold slipR">
//               Rs. Three Lac Thirty Three Thousand Seven Hundred Only
//             </Col>
//           </Row>
//         </Col>

//         {/* *******    First Side Slip Code End   ***** */}

//         {/* *******       Second Side Slip Code Start       ***** */}
//         <Col sm={8}>
//           <Row className="bg-dark text-light p-2">
//             <Col>
//               <h6>AXIS BANK</h6>
//             </Col>

//             <Col>
//               <h6>Deposit/Pay in Slip</h6>
//             </Col>
//           </Row>

//           <Row>
//             <Col sm={2}>PAN NO </Col>
//             <Col sm={1}>Branch</Col>
//             <Col sm={4}>KHEDSHIVAPUR</Col>
//             <Col sm={1}>Date</Col>
//             <Col sm={4}>25/09/2022</Col>
//           </Row>

//           <Row>
//             <Col>for cash Deposit Above Rs 50000/ </Col>
//           </Row>
//           <Row>
//             <Col sm={4}>
//               <Table responsive="sm" border="1">
//                 <thead>
//                   <tr>
//                     <th>Notes</th>
//                     <th>No.</th>
//                     <th>Rs. P </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>2000 X</td>
//                     <td>4</td>
//                     <td>8000</td>
//                   </tr>
//                   <tr>
//                     <td>500 X</td>
//                     <td>4</td>
//                     <td>2000</td>
//                   </tr>
//                   <tr>
//                     <td>200 X</td>
//                     <td>4</td>
//                     <td>800</td>
//                   </tr>
//                   <tr>
//                     <td>100 X</td>
//                     <td>4</td>
//                     <td>400</td>
//                   </tr>
//                   <tr>
//                     <td>50 X</td>
//                     <td>4</td>
//                     <td>200</td>
//                   </tr>
//                   <tr>
//                     <td>20 X</td>
//                     <td>4</td>
//                     <td>80</td>
//                   </tr>
//                   <tr>
//                     <td>10 X</td>
//                     <td>4</td>
//                     <td>40</td>
//                   </tr>
//                   <tr>
//                     <td>5 X</td>
//                     <td>4</td>
//                     <td>20</td>
//                   </tr>
//                   <tr>
//                     <td>Coins X</td>
//                     <td>4</td>
//                     <td>4</td>
//                   </tr>
//                   <tr>
//                     <td colSpan={3}>
//                       <h6 className="mastd">11520</h6>
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </Col>
//             <Col>
//               <Row>
//                 <Col className="text-center">
//                   <h6>SB/CA/OD/CC/RD/Loan A/c No. / Credit Card No</h6>
//                 </Col>
//               </Row>

//               <Row className="mb-4">
//                 <Col sm={3}></Col>
//                 <Col className="fw-bold">A/c No.</Col>
//                 <Col className="fw-bold" sm={7}>
//                   {" "}
//                   911100852147
//                 </Col>
//               </Row>

//               <Row className="mb-2">
//                 <Col>Name</Col>
//                 <Col sm={10} className="masterName fw-bold">
//                   Sonal{" "}
//                 </Col>
//               </Row>

//               <Row className="mb-2">
//                 <Col>Contact No. </Col>
//                 <Col sm={10} className="masterName"></Col>
//               </Row>

//               <Row className="mb-4">
//                 <Col>Rupees in words </Col>
//                 <Col className="fw-bold" sm={9}>
//                   {" "}
//                   Rs. Three Lac Thirty Three Thousand Seven Hundred Only
//                 </Col>
//               </Row>

//               <Table responsive="sm" border="1">
//                 <thead>
//                   <tr>
//                     <th>Cash/Cheque No./Date & Name of Bank & Branch </th>
//                     <th>Rs. P </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td></td>
//                     <td></td>
//                   </tr>
//                   <tr>
//                     <td></td>
//                     <td></td>
//                   </tr>

//                   <tr>
//                     <td></td>
//                     <td></td>
//                   </tr>

//                   <tr>
//                     <td className="mastd">
//                       <h6>Total</h6>
//                     </td>
//                     <td>
//                       <h6>11520</h6>
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default AxisBankSlip;
