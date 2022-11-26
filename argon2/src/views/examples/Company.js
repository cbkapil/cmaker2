import {
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Col,
  Button,
  Card,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Row,
} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// core components
import { forwardRef } from "react";
import MaterialTable from "material-table";
import Header from "components/Headers/Header";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { setConstantValue } from "typescript";
import { useHistory } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Alert from "@material-ui/lab/Alert";
import { ThemeProvider, createTheme } from "@mui/material";
import { Typeahead } from "react-bootstrap-typeahead";
import ReactDOM from "react-dom";
import { useRef } from "react";
const Company = () => {

  let [color, setColor] = useState("#6dd5ed");
  const [loading, setloading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [next, setnext] = useState(false);
  const [bankdata, setBankData] = useState("");

  const [firmname, setfirmname] = useState("");
  const [email, setemail] = useState("");
  const [gstin, setgstin] = useState("");
  const [pancard, setpancard] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [phonenumber2, setphonenumber2] = useState("");

  const [bankname, setbankname] = useState("");
  const [firmid, setfirmid] = useState("");
  const [ifsc, setifsc] = useState("");
  const [branchname, setbranchname] = useState("");
  const [account, setaccount] = useState("");
  const [datalen, setdatalen] = useState(0);
  const [datalist, setdatalist] = useState([]);

  const [data, setData] = useState([]); //table data
  const ref0 = useRef();
  const [formValues, setFormValues] = useState([
    { bankname: "", ifsc: "", branch: "", accountno: "" },
  ]);

  const defaultMaterialTheme = createTheme();
  useEffect(() => {
    setloading(true);
    getData();
    getFirm();
    getFirmdata();

    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, [checked, next, datalen]);

  const history = useHistory();
  const token = localStorage.getItem("token");
  console.log(token);

  let handleChange = (i, e) => {
    console.log("valuehhhh", e);
    let newFormValues = [...formValues];
    newFormValues[i][e.target?.name] = e.target.value;
    setFormValues(newFormValues);
  };
  console.log(formValues);
  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { bankname: "", ifsc: "", branch: "", accountno: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
  var columns = [
    { title: "id", field: "_id", hidden: true },
    { title: "Account No.", field: "account" },
    {
      title: "Bank",
      field: "bank",
      // editComponent: ({ value, onChange, oldData,onRowDataChange }) => (

      //   <Autocomplete
      //   disablePortal
      //   id="combo-box-demo"
      //   options={bankdata}
      //   sx={{ width: 200 }}
      //   renderInput={(params) => <TextField {...params} />}
      //   getOptionLabel={(option) => option}

      //   onChange={(event) => {

      //     oldData.bank=event.target.textContent

      //  }}
      // />

      // ),
    },
    { title: "Branch", field: "branch" },
    { title: "Firm Name", field: "firmname" },
    { title: "IFSC Code", field: "ifsc" },
  ];

  function validateEmail(email) {
    const re =
      /^((?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-][a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleRowUpdate = async (newData, oldData, resolve) => {
    console.log(newData);
    console.log(oldData);

    let result = await fetch(`http://localhost:8000/update/${newData._id}`, {
      method: "put",
      body: JSON.stringify({
        newData,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log(result);
    const dataUpdate = [...datalist];
    const index = oldData.tableData.id;
    dataUpdate[index] = newData;
    setdatalist([...dataUpdate]);
    resolve();
  };

  const handleRowDelete = async (oldData, resolve) => {
    console.log("ohohohooo", oldData._id);
    let result = await fetch(`http://localhost:8000/delete/${oldData._id}`, {
      method: "delete",

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log(result);
    const dataDelete = [...datalist];
    const index = oldData.tableData.id;
    dataDelete.splice(index, 1);
    setdatalist([...dataDelete]);
    resolve();
  };

  const getData = async () => {
    let result = await fetch("http://localhost:8000/getbank", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log(result);
    var bankarray = [];
    var bank = result.forEach((item) => {
      bankarray.push(item.banknamelist);
    });
    console.log(bankarray);
    setBankData(bankarray);
    console.log(bankdata);
  };

  const getFirm = async () => {
    let result = await fetch("http://localhost:8000/getfirm", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    var keys = Object.keys(result.firmDatas);

    var len = keys.length;
    console.log(len);
    setdatalen(len);
  };

  const getFirmdata = async () => {
    let result = await fetch("http://localhost:8000/getuser", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log("alldata", result);
    var temparray = [];
    const displaydata = result.firmDatas.firmid.forEach((item) => {
      item.bankLink.forEach((ut) => {
        return temparray.push(ut);
      });
    });
    console.log(temparray);
    setdatalist(temparray);
    console.log([...datalist]);
  };

  const failure=()=>{toast.error('🦄 Something Wrong! Please Try Again !!!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });}
  const success = () => {toast.success('Firm Data Added Successfully !!!!', {
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

    if (!firmname) {
      alert("Please Enter name");
      return;
    }
    if (!email) {
      alert("Please Enter email");
      return;
    }

    if (!pancard) {
      alert("Please Enter Password");
      return;
    }
    if (!gstin) {
      alert("Please Enter mobile No.");
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
    
    console.log(bankname);
    let result = await fetch("http://localhost:8000/createFirm", {
      method: "post",
      body: JSON.stringify({
        firmname: firmname,
        email: email,
        gstin: gstin,
        pancard: pancard,
        address: address,
        city: city,
        state: state,
        pincode: pincode,
        phonenumber: phonenumber,
       formvalues:formValues
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
      setTimeout(()=>{window.location.reload()},2000);
    } else {
      failure();
    }

    console.warn(result);
  };

 

  return (
    <>
      <Header />

      {loading ? (
        
        <div className="loader">
           <SyncLoader
          color={color}
          loading={loading}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
      ) : (
        <div>
          <Container className="mt--0" fluid>
            <div>
              <Card className="bg-secondary shadow">
                <CardBody className="p-1">
                  {checked === false && next === false ? (
                    <div>
                      <Row className="mt--0">
                        <div className="col">
                          <Card className="shadow">
                            <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                              <div className="d-flex justify-content-between">
                                <h3>COMPANY DETAILS</h3>

                                <Button
                                  className="float-right"
                                  color="default"
                                  onClick={(e) => {
                                    setChecked(true);
                                    console.log(checked);
                                  }}
                                  size="sm"
                                >
                                  Add Company
                                </Button>
                              </div>
                            </CardHeader>
                            <ThemeProvider theme={defaultMaterialTheme}>
                              <MaterialTable
                                title=""
                                columns={columns}
                                data={datalist}
                                icons={tableIcons}
                                editable={{
                                  onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve) => {
                                      handleRowUpdate(
                                        newData,
                                        oldData,
                                        resolve
                                      );
                                    }),
                                  // onRowAdd: (newData) =>
                                  //   new Promise((resolve) => {
                                  //     handleRowAdd(newData, resolve)
                                  //   }),
                                  onRowDelete: (oldData) =>
                                    new Promise((resolve) => {
                                      handleRowDelete(oldData, resolve);
                                    }),
                                }}
                                options={{
                                  sorting: true,
                                  search: true,
                                  searchFieldAlignment: "right",
                                  searchAutoFocus: true,
                                  searchFieldVariant: "standard",
                                  filtering: true,
                                  paging: true,
                                  pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
                                  pageSize: 5,
                                  paginationType: "stepped",
                                  showFirstLastPageButtons: false,
                                  paginationPosition: "bottom",
                                  exportButton: true,
                                  exportAllData: true,
                                  exportFileName: "TableData",
                                  addRowPosition: "first",
                                  actionsColumnIndex: -1,
                                
                                  grouping: false,
                                  columnsButton: true,
                                  rowStyle: (data, index) =>
                                    index % 2 === 0
                                      ? { background: "#f5f5f5" }
                                      : null,
                                  headerStyle: {
                                    background: "#01BAEF",
                                    color: "#fff",
                                  },
                                }}
                              />
                            </ThemeProvider>
                          </Card>
                        </div>
                      </Row>
                    </div>
                  ) : checked === true && next === false ? (
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

                            

                          </Col>
                          
                        </Row>
                      </div>
                      <form onSubmit={handleSubmit}>
                      {formValues.map((element, index) => (
                        <div>
                          <h6 className="heading-small text-muted mb-1 mt-2">
                            BANK INFORMATION
                          </h6>
                          <div className="pl-lg-4">
                            <Row>
                              <Col lg="4">
                                <label
                                  className="form-control-label"
                                  htmlFor="bankname"
                                >
                                  BANK NAME
                                </label>
                                <div>
                                  {" "}
                                  <Autocomplete
                                    name="bankname"
                                    disablePortal
                                    id="bankname"
                                    options={bankdata}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => (
                                      <TextField {...params} />
                                    )}
                                    ref={ref0}
                                    onInputChange={(e, v, r) => {
                                      const ev = e.target;
                                      if (r === "reset") console.log(ev, v, r);
                                    }}
                                    value={element.bankname || ""}
                                    getOptionLabel={(option) => option}
                                    onChange={(e, v, r) => {
                                      console.log(
                                        ref0.current.getAttribute("name")
                                      );
                                      let newFormValues = [...formValues];
                                      newFormValues[index][
                                        ref0.current.getAttribute("name")
                                      ] = v;
                                      setFormValues(newFormValues);
                                    }}
                                  />
                                </div>
                              </Col>
                              <Col lg="4">
                                <FormGroup>
                                  <label className="ifsc" htmlFor="input-email">
                                    IFSC CODE
                                  </label>

                                  <Input
                                    name="ifsc"
                                    className="form-control-alternative"
                                    id="ifsc"
                                    placeholder="Ifsc code"
                                    type="text"
                                    value={element.ifsc || ""}
                                    onChange={(e) => {
                                      handleChange(index, e);
                                    }}
                                  />
                                </FormGroup>
                              </Col>

                              <Col lg="4">
                                <FormGroup>
                                  <label className="branch" htmlFor="branch">
                                    BRANCH NAME
                                  </label>
                                  <Input
                                    name="branch"
                                    className="form-control-alternative"
                                    defaultValue=""
                                    id="branch"
                                    placeholder="Branch Name"
                                    type="text"
                                    value={element.branch || ""}
                                    onChange={(e) => {
                                      handleChange(index, e);
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
                                    htmlFor="input-city"
                                  >
                                    ACCOUNT NUMBER
                                  </label>
                                  <Input
                                    name="accountno"
                                    className="form-control-alternative"
                                    defaultValue=""
                                    id="accountno"
                                    placeholder="Account No."
                                    type="Number"
                                    value={element.accountno || ""}
                                    onChange={(e) => {
                                      handleChange(index, e);
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-city"
                                  >
                                    CONFIRM ACCOUNT NUMBER
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    defaultValue=""
                                    id="input-city"
                                    placeholder="Confirm Account No."
                                    type="text"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>

                            {index ? (
                              <button
                                type="button"
                                className="button remove"
                                onClick={() => removeFormFields(index)}
                              >
                                Remove
                              </button>
                            ) : null}
                          </div>
                        </div>
                      ))}

                      <div className="button-section">
                        <button
                          className="button add"
                          type="button"
                          onClick={() => addFormFields()}
                        >
                          Add
                        </button>
                        <button className="button submit" type="submit">
                          Submit
                        </button>
                      </div>
                      <div className="companybutton  ">
                        <Button onClick={firmSubmit}>Submit</Button>
                      </div>
                    </form>
                    </div>
                  ):(null)}
                </CardBody>
              </Card>
            </div>
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
          </Container>

        </div>
      )}
    </>
  );
};

export default Company;