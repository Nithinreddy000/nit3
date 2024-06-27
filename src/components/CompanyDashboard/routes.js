import Dashboard from "./layouts/dashboard";
import Profile from "./layouts/profile";
import Notifications from "./layouts/notifications";
import SignOut from "./layouts/authentication/sign-out";
import Sales from "./layouts/Sales";
import Orders from "./layouts/orders";
import Inward_Orders from "./layouts/inward_orders";
import Gate from "./layouts/gate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Weighment from "./layouts/weighment";
import Grn from "./layouts/grn";
import Purchase from "./layouts/purchase";
import Transporting from "./layouts/transporting";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import RegisterIcon from '@mui/icons-material/AppRegistration'
import BilletsRegister from "./layouts/billets_register";
import StructuresRegister from "./layouts/structures_register";
import SvgIcon from '@mui/material/SvgIcon';

// @mui icons
import Icon from "@mui/material/Icon";
import Pending from "./layouts/pending";
import Dispatch from "./layouts/dispatch";
import Billing from "./layouts/billing2";
import Invoice from "./layouts/invoice";
import TmtRegister from "./layouts/tmt_register";
import PipesRegister from "./layouts/pipes_register";
import WeighBridge from "./layouts/weighbridge_inward";
import WeighBridge2 from "./layouts/weighbridge_outward";
import WeighBridge3 from "./layouts/weighbridge_store";

function WeighbridgeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4 10h16v2H4v-2zm0 4h16v2H4v-2zm0-8h16v2H4V6zM2 2h2v20H2V2zm20 0h2v20h-2V2z"/>
    </SvgIcon>
  );
}

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sales",
    key: "sales",
    icon: <Icon fontSize="small">description</Icon>,
    route: "/sales",
    component: <Sales />,
  },
  {
    type: "collapse",
    name: "Orders",
    key: "orders",
    icon: <Icon fontSize="small">shopping_cart</Icon>,
    route: "/orders",
    component: <Orders />,
  },
  {
    type: "collapse",
    name: "Inward Orders",
    key: "inward_orders",
    icon: <Icon fontSize="small">inventory</Icon>,
    route: "/inward_orders",
    component: <Inward_Orders />,
  },
  {
    type: "collapse",
    name: "Gate",
    key: "gate",
    icon: <FontAwesomeIcon icon={faSignInAlt} />,
    route: "/gate",
    component: <Gate />,
  },  
  {
    type: "collapse",
    name: "Weighment",
    key: "weighment",
    icon: <Icon fontSize="small">scale</Icon>,
    route: "/weighment",
    component: <Weighment />,
  },
  {
    type: "collapse",
    name: "GRN",
    key: "grn",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/grn",
    component: <Grn />,
  },
  {
    type: "collapse",
    name: "Purchase",
    key: "purchase",
    icon: <Icon fontSize="small">shoppingbasket</Icon>,
    route: "/purchase",
    component: <Purchase />,
  },
  {
    type: "collapse",
    name: "Transporting",
    key: "transporting",
    icon: <Icon fontSize="small">local_shipping</Icon>,
    route: "/transporting",
    component: <Transporting />,
  },
  {
    type: "collapse",
    name: "Pending Vehicles",
    key: "pending",
    icon: <HourglassEmptyIcon icon={faSignInAlt} />, 
    route: "/pending",
    component: <Pending />,
  },
  {
    type: "collapse",
    name: "Dispatch",
    key: "dispatch",
    icon: <Icon fontSize="small">delivery_dining</Icon>,
    route: "/dispatch",
    component: <Dispatch />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing2",
    icon: <Icon fontSize="small">receipt</Icon>,
    route: "/billing2",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Invoice",
    key: "invoice",
    icon: <Icon fontSize="small">event_note</Icon>,
    route: "/invoice",
    component: <Invoice />,
  },
  {
    type: "collapse",
    name: "WeighBridge Inward",
    key: "weighbridge_inward",
    icon: <Icon fontSize="small"><WeighbridgeIcon /> </Icon>,
    route: "/weighbridge_inward",
    component: <WeighBridge />,
  },
  {
    type: "collapse",
    name: "WeighBridge Outward",
    key: "weighbridge_outward",
    icon: <Icon fontSize="small"><WeighbridgeIcon /> </Icon>,
    route: "/weighbridge_outward",
    component: <WeighBridge2 />,
  },
  {
    type: "collapse",
    name: "WeighBridge Store",
    key: "weighbridge_store",
    icon: <Icon fontSize="small"><WeighbridgeIcon /> </Icon>,
    route: "/weighbridge_store",
    component: <WeighBridge3 />,
  },
  {
    type: "collapse",
    name: "Tmt Register",
    key: "tmt_register",
    icon:  <RegisterIcon icon={faSignInAlt} />, 
    route: "/tmt_register",
    component: <TmtRegister />,
  },
  {
    type: "collapse",
    name: "Billets Register",
    key: "billets_register",
    icon:  <RegisterIcon icon={faSignInAlt} />, 
    route: "/billets_register",
    component: <BilletsRegister/>,
  },
  {
    type: "collapse",
    name: "Structures Register",
    key: "structures_register",
    icon:  <RegisterIcon icon={faSignInAlt} />, 
    route: "/structures_register",
    component: <StructuresRegister/>,
  },
  {
    type: "collapse",
    name: "Pipes Register",
    key: "pipes_register",
    icon:  <RegisterIcon icon={faSignInAlt} />, 
    route: "/pipes_register",
    component: <PipesRegister/>,
  },
  {
    type: "collapse",
    name: "Sign out",
    key: "sign-out",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-out",
    component: <SignOut />,
  },
];

export default routes;
