// reactstrap components
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


import {  useHistory } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { height } from "@mui/system";

const Login = () => {
// Carousel image code

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



  const [username,setusername]=useState('')
  const[password,setpassword]=useState('')

  const history = useHistory();
  const failure=()=>{toast.error('🦄 Incorrect Login Details !!!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });}
  const success = () => {toast.success('Login Successfull !!!!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });};

  const submit = async (e) => {
    e.preventDefault();

    if (!username) {
      alert("Please Enter email");
      return;
    }

    if (!password) {
      alert("Please Enter Password");
      return;
    }

    let result = await fetch("http://localhost:8000/login", {
      method: "post",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.status) {
     success();
      const token = result.token;
      console.log("hello", token);
      localStorage.setItem("token", token);
      // setCurrentUser({
      //   name: result.name,
      //   id: result._id,
      // });
      setTimeout(()=>{ history.push("/admin/index")},2000)
    } else {
    failure();
    }
  };
  return (
    <>
      <Row>
      <Col className="ml-5 p-2" >
        <Card className=" shadow border-0">
          <CardHeader className="bg-transparent pb-3">
            <div className="text-muted text-center mt-2 mb-3">
              <h1>Sign In</h1>
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
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small> With Credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="text"
                    autoComplete="new-email"
                    onChange={(e)=>{setusername(e.target.value)}}
                    value={username}
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
                    value={password}
                    onChange={(e)=>{setpassword(e.target.value)}}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick={submit}>
                  Sign in
                </Button>
              </div>
            </Form>

            <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small >Create new account</small>
            </a>
          </Col>

        </Row>
          </CardBody>
        </Card>
       
      </Col>
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


    </>
     
  );
};

export default Login;



























// // reactstrap components
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   FormGroup,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Row,
//   Col,
// } from "reactstrap";
// import Stack from "@mui/material/Stack";

// import Snackbar from "@mui/material/Snackbar";
// import MuiAlert from "@mui/material/Alert";

// import { useHistory } from "react-router-dom";
// import { useState } from "react";
// import * as React from "react";

// const Login = () => {
//   const [username, setusername] = useState("");
//   const [password, setpassword] = useState("");

//   const history = useHistory();
//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }

//     setOpen(false);
//   };

//   const Alert = React.forwardRef(function Alert(props, ref) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//   });

//   const submit = async (e) => {
//     e.preventDefault();

//     if (!username) {
//       alert("Please Enter email");
//       return;
//     }

//     if (!password) {
//       alert("Please Enter Password");
//       return;
//     }

//     let result = await fetch("http://localhost:8000/login", {
//       method: "post",
//       body: JSON.stringify({ username, password }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     result = await result.json();
//     console.log(result);
//     if (result.status) {
//       setOpen(true);
//       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
//           This is a success message!
//         </Alert>
//       </Snackbar>;
//       const token = result.token;
//       console.log("hello", token);
//       localStorage.setItem("token", token);

//       // setCurrentUser({
//       //   name: result.name,
//       //   id: result._id,
//       // });
//       history.push("/admin/index");
//     } else {
//       alert("Invalid users");
//     }
//   };
//   return (
//     <>
//       <Col lg="5" md="7">
//         <Card className="bg-secondary shadow border-0">
//           <CardHeader className="bg-transparent pb-5">
//             <div className="text-muted text-center mt-2 mb-3">
//               <small>Sign in with</small>
//             </div>
//             <div className="btn-wrapper text-center">
//               <Button
//                 className="btn-neutral btn-icon"
//                 color="default"
//                 href="#pablo"
//                 onClick={(e) => e.preventDefault()}
//               >
//                 <span className="btn-inner--icon">
//                   <img
//                     alt="..."
//                     src={
//                       require("../../assets/img/icons/common/github.svg")
//                         .default
//                     }
//                   />
//                 </span>
//                 <span className="btn-inner--text">Github</span>
//               </Button>
//               <Button
//                 className="btn-neutral btn-icon"
//                 color="default"
//                 href="#pablo"
//                 onClick={(e) => e.preventDefault()}
//               >
//                 <span className="btn-inner--icon">
//                   <img
//                     alt="..."
//                     src={
//                       require("../../assets/img/icons/common/google.svg")
//                         .default
//                     }
//                   />
//                 </span>
//                 <span className="btn-inner--text">Google</span>
//               </Button>
//             </div>
//           </CardHeader>
//           <CardBody className="px-lg-5 py-lg-5">
//             <div className="text-center text-muted mb-4">
//               <small>Or sign in with credentials</small>
//             </div>
//             <Form role="form">
//               <FormGroup className="mb-3">
//                 <InputGroup className="input-group-alternative">
//                   <InputGroupAddon addonType="prepend">
//                     <InputGroupText>
//                       <i className="ni ni-email-83" />
//                     </InputGroupText>
//                   </InputGroupAddon>
//                   <Input
//                     placeholder="Email"
//                     type="text"
//                     autoComplete="new-email"
//                     onChange={(e) => {
//                       setusername(e.target.value);
//                     }}
//                     value={username}
//                   />
//                 </InputGroup>
//               </FormGroup>
//               <FormGroup>
//                 <InputGroup className="input-group-alternative">
//                   <InputGroupAddon addonType="prepend">
//                     <InputGroupText>
//                       <i className="ni ni-lock-circle-open" />
//                     </InputGroupText>
//                   </InputGroupAddon>
//                   <Input
//                     placeholder="Password"
//                     type="password"
//                     autoComplete="new-password"
//                     value={password}
//                     onChange={(e) => {
//                       setpassword(e.target.value);
//                     }}
//                   />
//                 </InputGroup>
//               </FormGroup>
//               <div className="custom-control custom-control-alternative custom-checkbox">
//                 <input
//                   className="custom-control-input"
//                   id=" customCheckLogin"
//                   type="checkbox"
//                 />
//                 <label
//                   className="custom-control-label"
//                   htmlFor=" customCheckLogin"
//                 >
//                   <span className="text-muted">Remember me</span>
//                 </label>
//               </div>
//               <div className="text-center">
//                 <Button
//                   className="my-4"
//                   color="primary"
//                   type="button"
//                   onClick={submit}
//                 >
//                   Sign in
//                 </Button>
//               </div>
//             </Form>
//           </CardBody>
//         </Card>
//         <Row className="mt-3">
//           <Col xs="6">
//             <a
//               className="text-light"
//               href="#pablo"
//               onClick={(e) => e.preventDefault()}
//             >
//               <small>Forgot password?</small>
//             </a>
//           </Col>
//           <Col className="text-right" xs="6">
//             <a
//               className="text-light"
//               href="#pablo"
//               onClick={(e) => e.preventDefault()}
//             >
//               <small>Create new account</small>
//             </a>
//           </Col>
//         </Row>
//       </Col>
//     </>
//   );
// };

// export default Login;
