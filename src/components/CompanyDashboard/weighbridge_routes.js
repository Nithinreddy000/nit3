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

const Tmtroutes = [
  {
    type: "collapse",
    name: "WeighBridge 1",
    key: "we1",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
  {
    type: "collapse",
    name: "WeighBridge 2",
    key: "we2",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
  {
    type: "collapse",
    name: "WeighBridge 3",
    key: "we3",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
  {
    type: "collapse",
    name: "WeighBridge 4",
    key: "we4",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
  {
    type: "collapse",
    name: "WeighBridge 5",
    key: "we5",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
  {
    type: "collapse",
    name: "WeighBridge 6",
    key: "we6",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
  {
    type: "collapse",
    name: "WeighBridge 7",
    key: "we7",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
  {
    type: "collapse",
    name: "WeighBridge 8",
    key: "we8",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
  {
    type: "collapse",
    name: "WeighBridge 9",
    key: "we9",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
  {
    type: "collapse",
    name: "WeighBridge 10",
    key: "we10",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
  {
    type: "collapse",
    name: "WeighBridge 11",
    key: "we11",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
  {
    type: "collapse",
    name: "WeighBridge 12",
    key: "we12",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
  {
    type: "collapse",
    name: "WeighBridge 13",
    key: "we13",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
  {
    type: "collapse",
    name: "WeighBridge 14",
    key: "we14",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
  {
    type: "collapse",
    name: "WeighBridge 15",
    key: "we15",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
  {
    type: "collapse",
    name: "WeighBridge 16",
    key: "we16",
    icon: <Icon fontSize="small"><WeighbridgeIcon/></Icon>,
  },
];

export default Tmtroutes;
