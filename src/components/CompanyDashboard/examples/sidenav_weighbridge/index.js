import { useEffect, useRef, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import SidenavCollapse from "../../examples/Sidenav/SidenavCollapse";
import SidenavRoot from "../../examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "../../examples/Sidenav/styles/sidenav";
import brand3 from '../../../assets/infinityX.png';
import theme from "../../assets/theme";
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "../../context";

function Sidenav({ color, brand, brandName, routes, onItemClick, ...rest }) {
  const [controller, dispatch] = useMaterialUIController();
  const [clickedKey, setClickedKey] = useState(null);
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const location = useLocation();
  const activeRef = useRef(null); // Create a ref to store the active element
  const [activeKey, setActiveKey] = useState(location.pathname.replace("/", ""));

  let textColor = "white";

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(dispatch, window.innerWidth < 1200 ? false : transparentSidenav);
      setWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : whiteSidenav);
    }

    window.addEventListener("resize", handleMiniSidenav);

    handleMiniSidenav();

    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  useEffect(() => {
    setActiveKey(clickedKey);
  }, [clickedKey]);
  
  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeKey]);

  const handleColor = (key) => {
    return key === clickedKey;
  };

  useEffect(() => {
    if (clickedKey && activeRef.current && clickedKey === activeKey) {
      activeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [clickedKey]); 

  const handleItemClick = (key) => {
    onItemClick(key); // Set active key on item click
    setClickedKey(key); // Update the clickedKey state to trigger scroll effect
  };
  
  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, href, route }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            name={name}
            icon={icon}
           active={handleColor(key)}
            ref={key === activeKey ? activeRef : null}
            onClick={() => handleItemClick(key)}
            sx={{
              backgroundColor: handleColor(key) ? "#1A73E8" : "transparent",
              color: handleColor(key) ? "white" : textColor,
              scrollTo: handleColor(key)
            }}
          />
        </Link>
      ) : (
        <NavLink key={key} to={route}>
          <SidenavCollapse
            name={name}
            icon={icon}
            active={handleColor(key)}
            ref={key === activeKey ? activeRef : null}
            onClick={() => handleItemClick(key)}
            sx={{
              backgroundColor: handleColor(key) ? "#1A73E8" : "transparent",
              color: handleColor(key) ? "white" : textColor,
              scrollTo: handleColor(key)
            }}
          />
        </NavLink>
      );
    } else if (type === "title") {
      returnValue = (
        <MDTypography
          key={key}
          color={textColor}
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          pl={3}
          mt={2}
          mb={1}
          ml={1}
        >
          {title}
        </MDTypography>
      );
    } else if (type === "divider") {
      returnValue = (
        <Divider
          key={key}
          light={
            (!darkMode && !whiteSidenav && !transparentSidenav) ||
            (darkMode && !transparentSidenav && whiteSidenav)
          }
        />
      );
    }

    return returnValue;
  });

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >
      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <MDTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </MDTypography>
        </MDBox>
        <MDBox component={NavLink} to="/" display="flex" alignItems="center">
          {brand3 && <MDBox component="img" src={brand3} alt="Brand" width="10rem" />}
          <MDBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
            <MDTypography component="h6" variant="button" fontWeight="medium" color={textColor}>
              {brandName}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
      <Divider
        light={
          (!darkMode && !whiteSidenav && !transparentSidenav) ||
          (darkMode && !transparentSidenav && whiteSidenav)
        }
      />
      <List>{renderRoutes}</List>
    </SidenavRoot>
  );
}

Sidenav.defaultProps = {
  color: "info",
  brand: "",
  onItemClick: () => {}, // Default onItemClick as a no-op
};

Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemClick: PropTypes.func, // Add onItemClick to prop types
};

export default Sidenav;
