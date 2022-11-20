import Index from "views/Index.js";
import Company from "views/examples/Company.js";
// import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Customer from "views/examples/Customer.js";
import Slip from "views/examples/slip/Slip.js";
import ViewChequeSlip from "views/examples/ViewChequeSlip.js";
import ViewCashSlip from "views/examples/slip/ViewCashSlip";
import SbiBankSlip from "views/examples/bankSlip/SbiBankSlip";

var routes = [
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/company",
  //   name: "Company",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Company,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    path: "/company",
    name: "Company",
    icon: "ni ni-single-02 text-yellow",
    component: Company,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin"
  // },
  {
    path: "/depositslip",
    name: "Deposit Slip",
    icon: "ni ni-bullet-list-67 text-red",
    component: Slip,
    layout: "/admin",
  },
  {
    path: "/customer",
    name: "Customer",
    icon: "ni ni-single-02 text-yellow",
    component: Customer,
    layout: "/admin",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/viewchequeslip",
    name: "View Cheque Slip",
    icon: "ni ni-bullet-list-67 text-red",
    component: ViewChequeSlip,
    layout: "/admin",
  },
  {
    path: "/viewcashslip",
    name: "View Cash Slip",
    icon: "ni ni-bullet-list-67 text-red",
    component: ViewCashSlip,
    layout: "/admin",
  },
  {
    path: "/sbicashslip",
    name: "Sbi Cash Slip",
    icon: "ni ni-bullet-list-67 text-red",
    component: SbiBankSlip,
    layout: "/admin",
  },
];
export default routes;
