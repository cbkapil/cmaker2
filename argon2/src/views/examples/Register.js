import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Carousel,
    CarouselItem,
    CarouselIndicators,
} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {  useHistory } from "react-router-dom";
import React, { useState } from "react";

const Register = () => {
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setaddress] = useState("");
  const [password, setpassword] = useState("");

  
 // State for Active index
 const [activeIndex, setActiveIndex] = React.useState(0);

 // State for Animation
 const [animating, setAnimating] = React.useState(false);

 // Sample items for Carousel
 const items = [
     {src: 
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190603152813/ml_gaming.png',
     },
     {src: 
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190528184201/gateexam.png',
     }
 ];

 // Items array length
 const itemLength = items.length - 1

 // Previous button for Carousel
 const previousButton = () => {
     if (animating) return;
     const nextIndex = activeIndex === 0 ?
         itemLength : activeIndex - 1;
     setActiveIndex(nextIndex);
 }

 // Next button for Carousel
 const nextButton = () => {
     if (animating) return;
     const nextIndex = activeIndex === itemLength ?
         0 : activeIndex + 1;
     setActiveIndex(nextIndex);
 }

 // Carousel Item Data
 const carouselItemData = items.map((item) => {
     return (
         <CarouselItem
       
             key={item.src}
             onExited={() => setAnimating(false)}
             onExiting={() => setAnimating(true)}
         >
             <img src={item.src} alt={item.altText}  />
         </CarouselItem>
     );
 });


// Carousel image code

const failure=()=>{toast.error('🦄 Email Already Exists !!!', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  });}
const success = () => {toast.success('Registered Successfully !!!!', {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  });};

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    console.log(username)
   
    console.log("register");

    if (!username) {
      alert("Please Enter name");
      return;
    }
    if (!email) {
      alert("Please Enter email");
      return;
    }

    if (!password) {
      alert("Please Enter Password");
      return;
    }
    if (!mobile) {
      alert("Please Enter mobile No.");
      return;
    }
    if (!address) {
      alert("Please Enter address");
      return;
    }

    let result = await fetch("http://localhost:8000/register", {
      method: "post",
      body:JSON.stringify( { username, email, password, mobile, address }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result)
    if (result.status) {
      success()
      setTimeout(()=>{ history.push("/auth/login")},2000)
    } else if (!result.status) {
      failure()
    } else {
      console.warn("error");
    }

    console.warn(result);
  };
  return (
    <>
       <Row>
      <Col className="ml-5 p-2" >
        <Card className=" shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <h1>Sign Up </h1>
            </div>
            {/* <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div> */}
          </CardHeader>

          <CardBody className="px-lg-5 ">
    <div className="text-center text-muted mb-4">
      <small> With Credentials</small>
    </div>
    <Form role="form">
      <FormGroup className="mb-3">
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-hat-3" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Name" type="text"  value={username}  onChange={(e)=>{setuserName(e.target.value)}}/>
        </InputGroup>
      </FormGroup>
      <FormGroup className="mb-3">
        <InputGroup className="input-group-alternative ">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-email-83" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Email"
            type="email"
            autoComplete="new-email"

            value={email}  onChange={(e)=>{setEmail(e.target.value)}}
          />
        </InputGroup>
      </FormGroup>
      <FormGroup className="mb-3">
        <InputGroup className="input-group-alternative ">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-mobile-button" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Mobile"
            type="number"
            autoComplete="new-mobile"

            value={mobile}  onChange={(e)=>{setMobile(e.target.value)}}
          />
        </InputGroup>
      </FormGroup>
      <FormGroup className="mb-3">
        <InputGroup className="input-group-alternative ">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-building" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Address"
            type="text"
            autoComplete="new-Address"

            value={address}  onChange={(e)=>{setaddress(e.target.value)}}
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-lock-circle-open" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Password"
            type="password"
            autoComplete="new-password"

            value={password}  onChange={(e)=>{setpassword(e.target.value)}}
          />
        </InputGroup>
      </FormGroup>
      {/* <div className="text-muted font-italic">
        <small>
          password strength:{" "}
          <span className="text-success font-weight-700">strong</span>
        </small>
      </div>
      <Row className="my-4">
        <Col xs="12">
          <div className="custom-control custom-control-alternative custom-checkbox">
            <input
              className="custom-control-input"
              id="customCheckRegister"
              type="checkbox"
            />
            <label
              className="custom-control-label"
              htmlFor="customCheckRegister"
            >
              <span className="text-muted">
                I agree with the{" "}
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>
        </Col>
      </Row> */}
      <div className="text-center">
        <Button className="my-4" color="primary" type="button" onClick={submit}>
          Create account
        </Button>
      </div>
    </Form>
  </CardBody>
          
        </Card>
       
      </Col>
      
      <Col lg='8'  >
      <div style={{
            display: 'block', padding : '2%', paddingTop : '1%'
        }}>
            <Carousel previous={previousButton} next={nextButton} 
                activeIndex={activeIndex}>
                <CarouselIndicators items={items} 
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
            </Carousel>
        </div >
      </Col>

      </Row>
      <ToastContainer
          position="top-center"
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

export default Register;


