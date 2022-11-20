import React from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import logo from "../../assets/images/pnblogo.png";
import parilogo from "../../assets/images/pnbparivartanlogo.png";
import swachlogo from "../../assets/images/pnbswachlogo.png";

const PNBSlip = () => {
  // Date data get
  var date = "45260201";
  var dateArr = [];
  var n = date.length;
  for (var i = 0; i < n; i++) {
    dateArr.push(date[i]);
  }
  console.log(dateArr);

  // Account data get

  var account = "4526020104177123";
  var accountArr = [];
  var acn = account.length;
  for (var ai = 0; ai < acn; ai++) {
    accountArr.push(account[ai]);
  }
  console.log(accountArr);

  return (
    <>
      <Row>
        <Col sm={5}>
          <Card>
            <Card.Body >
              <Card.Title>
                <Row className="mb-2">
                  <Col sm={5}>
                    <img src={logo} className="pnblogo " alt="logo" />
                  </Col>
                  <Col sm={3}>
                    <img src={parilogo} className="pnbparilogo " alt="logo" />
                  </Col>
                  <Col sm={4}>
                    <img src={swachlogo} className="pnbswachlogo " alt="logo" />{" "}
                  </Col>
                </Row>

                <Row className="mb-2">
                  <Col> शाखा/Branch</Col>
                  <Col sm={8} className="pnbcatitbr"></Col>
                </Row>

                <Row className="mb-2">
                  <Col sm={2} className="pncardtextfrowcol1">
                    {" "}
                    दिनांक /Date
                  </Col>
                  {dateArr.map((item, index) => {
                    console.log(item, index);
                    return (
                      <Col sm={1} className="pncardtextfrowcol2 fw-bold">
                        {" "}
                        {item}{" "}
                      </Col>
                    );
                  })}
                </Row>
                <Row>
                  <Col sm={12} className="pncardtextfrowcol1">
                    {" "}
                    बचत/चालू/ओडी/नकद उधार/आवर्ती जमा/आवधिक ऋृण/मांग ऋृण खाता
                    संख्या/
                  </Col>
                  <Col sm={12} className="pncardtextfrowcol1">
                    क्रेडिट कार्ड संख्या SF/CA/OD/CC/RD/TL/DL/A/C No./Credit
                    Card No.{" "}
                  </Col>
                  {accountArr.map((item, index) => {
                    console.log(item, index);
                    return (
                      <Col className="pncardtextfrowcol2 fw-bold"> {item} </Col>
                    );
                  })}
                </Row>
              </Card.Title>
              <Card.Text>
                <Row className="mb-2">
                  <Col>नाम/Name</Col>
                  <Col sm={9} className="pnbcatitbr"></Col>
                </Row>

                <Row className="mb-2">
                  <Col>दूर /Tel.</Col>
                  <Col sm={9} className="pnbcatitbr"></Col>
                </Row>

                <Row className="mb-2">
                  <Col sm={2}>
                    <Col> राशि</Col>
                    <Col> Amount</Col>
                  </Col>
                  <Col sm={10}>
                    <Col>
                      <Row>
                        <Col className="text-center">₹</Col>
                        <Col sm={3}>पैं./P.</Col>
                      </Row>
                    </Col>

                    <Col>
                      <Row>
                        <Col className="pncardtextfrowcol2 fw-bold">23456</Col>
                        <Col
                          sm={3}
                          className="pncardtextfrowcol2 fw-bold"
                        ></Col>
                      </Row>
                    </Col>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} className="mb-4">
                      <Row>
                      <Col>राशि शब्दों में / Amount (in words) Rs. </Col>
                      <Col className="pnbcatitbr"></Col>
                      </Row>
                        
                      
                  </Col>
                  <Col className="pnbcatitbr"></Col>
                  
                </Row>
                
                <Table className="pnbtable mt-3" bordered variant="black" >
                  <thead>
                    <tr>
                      <th>
                        <Col>चेक नं. एवं  बैंक का नाम </Col>
                        <Col>Cheques No. & Bank Name </Col>
                      </th>
                      <th>
                        <Col>₹</Col>
                      </th>
                      <th>
                        <Col>पैं./P.</Col>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>23455666</td>
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
                      <td className=" text-center">
                        कुल /Total
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>

                <Row>
                  <Col>Officer/Cashier/SWO</Col>
                  <Col sm={6} className="pncardtextlastrowcol">
                    <Col className="pncardtextlastrowcol1">Punjab National Bank Toll free</Col>
                    <Col className="pncardtextlastrowcol1">24 hours call center 1800 180 2222/ 1800 103 2222</Col>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Section Start */}

        <Col sm={7}>
          <Card>
            <Card.Body>
            <Row>
            <Col sm={4}>
            <Row>
                <Col sm={12}>रु. 50,000 तथा अधिक की नकद राशि हेतु पैन कार्ड संख्या /</Col>
                <Col sm={12}>For Cash Deposit of Rs. 50,000/- & above</Col>
                <Col sm={12}>PAN NO.</Col>
              </Row>
              
            <Table className="pnbtable mt-3" bordered variant="black" >
              
                  <thead>
                    <tr>
                      <th>
                        <Col>मूल्य वर्ग  </Col>
                        <Col>Notes </Col>
                      </th>
                      <th>
                        <Col>संख्या</Col>
                        <Col>No. </Col>
                      </th>
                      <th>
                        ₹
                      </th>
                      <th>
                        <Col>पैं.</Col>
                        <Col>P.</Col>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2000 X</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>500 X</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>200 X</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>100 X</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>50 X</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>20 X</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>10 X</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>5 X</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                 
                    <tr>
                      <td>Coins</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                 
                    <tr>
                      <td className=" text-center">
                        कुल /Total
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>

                <Row>
                  <Col>1. सभी चेक अनिवार्यत रेखित हो/ All Cheques must be crossed.</Col>
                  <Col>2. नकद जमा व स्थानीय चेकों के लिए अलग -अलग फार्म भरें /</Col>
                  <Col>Please use seperate slips for Cash Deposit and Local Cheques.</Col>
                </Row>
            </Col>
            <Col sm={8}></Col>
          </Row>
            </Card.Body>
          </Card>
          
        </Col>
      </Row>
    </>
  );
};

export default PNBSlip;
