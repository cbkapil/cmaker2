import React from 'react'

const AddCompany = () => {
  return (
    <>
        <div>
                    <h6 className="heading-small text-muted mb-1 mt-2">
                      Company information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Company Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-username"
                              placeholder="company name"
                              type="text"
                              value={firmname}
                              onChange={(e) => {
                                setfirmname(e.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="xyz@example.com"
                              type="email"
                              value={email}
                              onChange={(e) => {
                                setemail(e.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-1" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-1">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-address"
                              placeholder="Company Address"
                              type="text"
                              value={address}
                              onChange={(e) => {
                                setaddress(e.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              City
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-city"
                              placeholder="City"
                              type="text"
                              value={city}
                              onChange={(e) => {
                                setcity(e.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              State
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-country"
                              placeholder="State"
                              type="text"
                              value={state}
                              onChange={(e) => {
                                setstate(e.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Postal code
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder="Postal code"
                              type="number"
                              value={pincode}
                              onChange={(e) => {
                                setpincode(e.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Phone Number1
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-username"
                              placeholder="contact number"
                              type="text"
                              value={phonenumber}
                              onChange={(e) => {
                                setphonenumber(e.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Phone Number 2
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="contact number2"
                              type="text"
                              value={phonenumber2}
                              onChange={(e) => {
                                setphonenumber2(e.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-1" />

                    <h6 className="heading-small text-muted mb-1">
                      Tax Information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              GSTIN Number
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-username"
                              placeholder="GSTIN"
                              type="text"
                              value={gstin}
                              onChange={(e) => {
                                setgstin(e.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              PAN CARD
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="pan card "
                              type="text"
                              value={pancard}
                              onChange={(e) => {
                                setpancard(e.target.value);
                              }}
                            />
                          </FormGroup>
                          <div className="companybutton d-flex ">
                            <Button
                              value="false"
                              onClick={(e) => setChecked(e.target.value)}
                            >
                              {" "}
                              Prev
                            </Button>
                            <Button
                              value="true"
                              onClick={(e) => setChecked(e.target.value)}
                            >
                              Next
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
    </>
  )
}

export default AddCompany