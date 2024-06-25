import React, { useEffect, useRef, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import SidenavCollapse from "../../examples/Sidenav/SidenavCollapse";
import SidenavRoot from "../../examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "../../examples/Sidenav/styles/sidenav";
import brand2 from '../../../assets/infinityX.png';
import theme from "../../assets/theme";
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "../../context";

function SidenavRegister({ brandName, routes, onItemClick, onItemClick2, ...rest }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } = controller;
  const location = useLocation();
  const activeRef = useRef(null);
  const [activeKey, setActiveKey] = useState(location.pathname.replace("/", ""));
  const [clickedKey, setClickedKey] = useState(null);
  const [expandedKeys, setExpandedKeys] = useState(new Set());
  const { palette } = theme;
  const { grey } = palette;

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
    setActiveKey(location.pathname.replace("/", ""));
  }, [location]);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeKey]);

  const handleRouteClick = (key, id) => {
    if (onItemClick) {
      onItemClick(id);
    }
    setClickedKey(key);
    toggleExpansion(key);
  };


  const handleRouteClick2 = (key, id2) => {
    if (onItemClick2) {
      onItemClick2(id2); // Pass id2 instead of id
    }
    setClickedKey(key);
  };

  const handleArrowClick = (key, event) => {
    event.stopPropagation();
    toggleExpansion(key);
  };

  const toggleExpansion = (key) => {
    setExpandedKeys((prevExpandedKeys) => {
      const expanded = new Set(prevExpandedKeys);
      if (expanded.has(key)) {
        expanded.delete(key);
      } else {
        expanded.add(key);
      }
      return expanded;
    });
  };

  const handleColor = (key) => {
    return key === clickedKey;
  };

  const renderSubRoutes = (subRoutes, key, id2, route) => {
    return (
      <Collapse in={expandedKeys.has(key)} timeout="auto" unmountOnExit>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: (window.innerWidth === 1024 && window.innerHeight === 1366) // iPad Pro Portrait
            || (window.innerWidth === 1366 && window.innerHeight === 1024) // iPad Pro Landscape
            ? '3vh'
            : window.innerWidth === 430
            ? '4vh' 
            : window.innerWidth === 768
            ? '6vh' 
            : window.innerWidth === 1024
            ? '6vh' 
            : window.innerWidth === 2560 
            ? '2.5vh' 
            : window.innerWidth > 767 && window.innerWidth < 1366 
            ? '3vh' 
            : '5.5vh',
            top: 6,
            bottom: 0,
            width: '2px',
            backgroundColor: 'white',
            borderRadius: '1px',
          }} />
          <List sx={{ paddingLeft: '20px' }}>
            {subRoutes.map(({ type, name, icon, title, noCollapse, key, route, id2, subRoutes}) => (
              <NavLink
                to={route}
                key={id2}
                onClick={() => handleRouteClick2(key, id2)} 
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'left',
                  paddingLeft: '2vh',
                  marginLeft : (window.innerWidth === 1024 && window.innerHeight === 1366) // iPad Pro Portrait
                  || (window.innerWidth === 1366 && window.innerHeight === 1024) // iPad Pro Landscape
                  ? '2vh'
                  : window.innerWidth === 430
                  ? '4vh'
                  : window.innerWidth === 768
                  ? '6vh'
                  : window.innerWidth === 1024
                  ? '6vh'
                  : window.innerWidth === 2560
                  ? '2vh'
                  : window.innerWidth > 767 && window.innerWidth < 1366
                  ? '2.5vh'
                  : '5vh',
                  paddingBottom: '1.5vh',
                  paddingTop: '1vh',
                  fontWeight: '300',
                  fontSize: '0.875rem',
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  color: 'white',
                  borderRadius: '0 4px 4px 0',
                  transition: 'background-color 0.3s',
                  backgroundColor: handleColor(key) ? "#1A73E8" : "transparent",
                  color: handleColor(key)? "white" : textColor,
                })}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#56565b';
                  e.currentTarget.style.width = '150px';
                  e.currentTarget.style.borderRadius = '4px';
                }}
                onMouseOut={(e) => {
                  if (!handleColor(key)) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {name}
              </NavLink>
            ))}
          </List>
        </div>
      </Collapse>
    );
  };

  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, id, routes: subRoutes }) => {
    let content;

    if (type === "collapse") {
      const isActive = activeKey === key;
      const isExpanded = expandedKeys.has(key);

      content = (
        <>
          <MDBox key={key} display="flex" alignItems="center">
            <NavLink 
              to={route} 
              onClick={() => handleRouteClick(key, id)}
              style={{
                flex: 1,
                textDecoration: 'none',
                display: 'block',
                textAlign: 'center',
                color: 'inherit',
                borderRadius: '0 4px 4px 0',
              }}
            >
              <SidenavCollapse
                name={name}
                icon={icon}
                active={handleColor(key)}
                ref={key === activeKey ? activeRef : null}
                sx={{
                  backgroundColor: handleColor(key) ? "#1A73E8" : "transparent",
                  color: handleColor(key) ? "white" : textColor,
                }}
              >
                {title}
              </SidenavCollapse>
            </NavLink>
            {subRoutes && subRoutes.length > 0 && (
              <Icon 
                onClick={(event) => handleArrowClick(key, event)}
                style={{ color: 'white' }}
                sx={{ cursor: 'pointer', marginRight: '16px', color: 'white' }}
              >
                {isExpanded ? 'expand_less' : 'expand_more'}
              </Icon>
            )}
          </MDBox>
          {renderSubRoutes(subRoutes, key, id)}
        </>
      );
    } else if (type === "title") {
      content = (
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
      content = (
        <Divider
          key={key}
          light={!darkMode && !whiteSidenav && !transparentSidenav || (darkMode && !transparentSidenav && whiteSidenav)}
        />
      );
    }

    return content;
  });

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >
      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox
          display={{ xs: 'block', xl: 'none' }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: 'pointer' }}
        >
          <MDTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: 'bold' }}>close</Icon>
          </MDTypography>
        </MDBox>
        <MDBox component={NavLink} to="/" display="flex" alignItems="center">
          <MDBox component="img" src={brand2} alt="Brand" width="10rem" />
          <MDBox
            width={!brandName && '100%'}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
            <MDTypography component="h6" variant="button" fontWeight="medium" color={textColor}>
              {brandName}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
      <Divider
        light={!darkMode && !whiteSidenav && !transparentSidenav || (darkMode && !transparentSidenav && whiteSidenav)}
      />
      <List>
        {renderRoutes}
      </List>
    </SidenavRoot>
  );
}

SidenavRegister.defaultProps = {
  color: "info",
  brand: "",
};

SidenavRegister.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemClick: PropTypes.func,
  onItemClick2: PropTypes.func,
};

export default SidenavRegister;
