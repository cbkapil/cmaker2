import React from 'react';
import {
    Button,
    FormGroup,
    Form,
    Input,
    Table,
    Container,
    Row,
    Col,
  } from "reactstrap";

const ChequeSlip = () => {
  return (
    <>
         <Form className="p-1 ">
                <Row className="mt-0">
                  <Col lg="6">
                    <label className="form-control-label" htmlFor="input-email">
                      FIRM NAME
                    </label>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={firmdata}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label=" Select Firm" />
                      )}
                      getOptionLabel={(option) => option?.firmname}
                      onChange={(e, value) => {
                        setfirmid(value._id);
                      }}
                    />

                    <label className="form-control-label" htmlFor="input-email">
                      BANK NAME
                    </label>

                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={!bankdata ? <div>loading...</div> : bankdata}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label=" Select Bank" />
                      )}
                      onChange={(e, value) => {
                        setbankid(value);
                      }}
                    />

                    <label className="form-control-label" htmlFor="input-email">
                      BRANCH NAME
                    </label>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={
                        !branchdata
                          ? [{ label: "Loading...", id: 0 }]
                          : branchdata
                      }
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label=" Select Branch" />
                      )}
                      getOptionLabel={(option) => option?.branch}
                      onChange={(e, value) => {
                        setaccountfin(value.account);
                        setbranchid(value.branch);
                      }}
                    />

                    <FormGroup className="mb-3">
                      <Row>
                        <Col>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Account Number
                          </label>
                        </Col>
                        <Col>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            {accountfin}
                          </label>
                        </Col>
                      </Row>
                    </FormGroup>

                    <FormGroup className="mb-3">
                      <Row>
                        <Col>
                          {" "}
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Doc Date
                          </label>
                        </Col>
                        <Col>
                          {" "}
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-username"
                            type="date"
                          />
                        </Col>
                      </Row>
                    </FormGroup>

                    <FormGroup className="mb-3">
                      <Row>
                        <Col>
                          {" "}
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Deposit date
                          </label>
                        </Col>
                        <Col>
                          {" "}
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-username"
                            type="date"
                          />
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>

                  <Col lg="6">
                    <label className="form-control-label" htmlFor="input-email">
                      Customer NAME
                    </label>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={partydata}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(e) => setparty2name(e.target.textContent)}
                    />

                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-city"
                      >
                        Cheque No.
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue=""
                        id="input-city"
                        placeholder="Cheque No."
                        type="text"
                        onChange={(e) => setchequeno(e.target.value)}
                      />
                    </FormGroup>

                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-city"
                      >
                        Amount
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue=""
                        id="input-city"
                        placeholder="Cheque No."
                        type="number"
                        onChange={(e) => setamount(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Button
                  className="companybutton"
                  variant="primary"
                  type="submit"
                  onClick={formSubmit}
                >
                  Generate Slip
                </Button>
              </Form>
    </>
  )
}

export default ChequeSlip