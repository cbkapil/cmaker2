import Header from "components/Headers/Header";
import React, { useState, useEffect } from "react";
import {
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Container,
  Col,
  Button,
  Card,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Row,
} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SyncLoader from "react-spinners/SyncLoader";

const Customer = () => {
  const [loading, setloading] = useState(false);
  let [color, setColor] = useState("#6dd5ed");
  const [customername, setcustomername] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [phonenumber2, setphonenumber2] = useState("");

  const token = localStorage.getItem("token");
  console.log(token);
  const failure=()=>{toast.error('🦄 Something Wrong !!!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });}
  const success = () => {toast.success('Customer Added Successfully !!!!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });};

  const firmSubmit = async (e) => {
    e.preventDefault();

    if (!customername) {
      alert("Please Enter name");
      return;
    }
    if (!email) {
      alert("Please Enter email");
      return;
    }

    if (!address) {
      alert("Please Enter address");
      return;
    }
    if (!city) {
      alert("Please Enter city");
      return;
    }
    if (!state) {
      alert("Please Enter state");
      return;
    }
    if (!pincode) {
      alert("Please Enter pincode");
      return;
    }
    if (!phonenumber) {
      alert("Please Enter phonenumber");
      return;
    }
    if (!phonenumber2) {
      alert("Please Enter phonenumber2");
      return;
    }

    let result = await fetch("http://localhost:8000/createparty", {
      method: "post",
      body: JSON.stringify({
        customername,
        email,
        address,
        city,
        state,
        pincode,
        phonenumber,
        phonenumber2,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log(result);

    if (result.status) {
      success();
      setcustomername('');
      setemail('');
        setaddress('');
        setcity('');
        setstate('');
        setpincode('');
        setphonenumber('');
        setphonenumber2('');

    } else {
      failure()
    }

    console.warn(result);
  };

  useEffect(() => {
    setloading(true);
    setTimeout(()=>{
      setloading(false)
    },3000)
  
  
  }, [])
  

  return (
    <>
      <Header />
      {
        loading ? (
          <div className="loader">
          <SyncLoader
         color={color}
         loading={loading}
         size={80}
         aria-label="Loading Spinner"
         data-testid="loader"
       />
       </div>
        ):(
          <div>
             <div className="p-3">
        <h6 className="heading-small text-muted mb-1 mt-2">
          Customer Information
        </h6>
        <div className="pl-lg-4">
          <Row>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-username">
                  Customer Name
                </label>
                <Input
                  className="form-control-alternative"
                  defaultValue=""
                  id="input-username"
                  placeholder="Customer name"
                  type="text"
                  value={customername}
                  onChange={(e) => {
                    setcustomername(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-email">
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
        <h6 className="heading-small text-muted mb-1">Contact information</h6>
        <div className="pl-lg-4">
          <Row>
            <Col md="12">
              <FormGroup>
                <label className="form-control-label" htmlFor="input-address">
                  Address
                </label>
                <Input
                  className="form-control-alternative"
                  defaultValue=""
                  id="input-address"
                  placeholder="Customer Address"
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
                <label className="form-control-label" htmlFor="input-city">
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
                <label className="form-control-label" htmlFor="input-country">
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
                <label className="form-control-label" htmlFor="input-country">
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
                <label className="form-control-label" htmlFor="input-username">
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
                <label className="form-control-label" htmlFor="input-email">
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
        <div  className="companybutton  ">
          <Button onClick={firmSubmit}>
            Submit
          </Button>
        </div>
      </div>
          </div>
        )

      }
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

     
    </>
  );
};

export default Customer;
