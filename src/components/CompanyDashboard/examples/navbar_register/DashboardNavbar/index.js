import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import MDBox from "../../../components/MDBox";
import MDInput from "../../../components/MDInput";
import Breadcrumbs from "../../../examples/Breadcrumbs";
import NotificationItem from "../../../examples/Items/NotificationItem";
import BilletsRegister from "../../../layouts/billets_register";
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "../../../examples/Navbars/DashboardNavbar/styles";
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "../../../context";

function DashboardNavbarRegister({ absolute, light, isMini, onSearch }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');
  const isActive = (path) => location.pathname === path;


  useEffect(() => {
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    window.addEventListener("scroll", handleTransparentNavbar);
    handleTransparentNavbar();

    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleSectionClick = (route) => {
    navigate(route); // Navigate to the specified route
    setActiveSection(route); // Update active section
  };

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Podcast sessions" />
      <NotificationItem icon={<Icon>shopping_cart</Icon>} title="Payment successfully completed" />
    </Menu>
  );

  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;
      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }
      return colorValue;
    },
  });

  const buttonStyle = {
    outline: 0,
    border: 0,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  };

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox 
          color="inherit" 
          mb={{ xs: 1, md: 0 }} 
          sx={(theme) => ({
            ...navbarRow(theme, { isMini }),
            padding: '10px', // Increase padding
            fontSize: '1.25rem', // Increase font size
            '& .MuiTypography-root': {
              fontSize: '1rem', // Increase font size for breadcrumb text
            },
            '& .MuiSvgIcon-root': {
              fontSize: '1.5rem', // Increase font size for icons
            },
          })}
        >
          <Breadcrumbs
            icon="home"
            title="Dashboard" // Static title
            route={[]} // Empty route array because we're not using location.pathname
            light={light}
          />
        </MDBox>


        {isMini ? null : (
          <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
            <MDBox pr={1}>
              <MDInput
                label="Search here"
                onChange={(e) => onSearch(e.target.value)}
              />
            </MDBox>
            <MDBox color={light ? "white" : "inherit"}>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon sx={iconsStyle} fontSize="medium">
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconButton}
                onClick={handleConfiguratorOpen}
              >
                <Icon sx={iconsStyle}>settings</Icon>
              </IconButton>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconButton}
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleOpenMenu}
              >
                <Icon sx={iconsStyle}>notifications</Icon>
              </IconButton>
              {renderMenu()}
            </MDBox>
          </MDBox>
        )}

      </Toolbar>
      <MDBox sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' ,paddingTop: { xs: '5vh', md: '2vh' }}}>
          {/* Button Container */}
          <div className="button-container">
            <IconButton
              className="button"
              style={{
                ...buttonStyle,
               }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
              onClick={() => navigate("/tmt_register")} // Redirect on click
            >
              <Icon style={{ fontSize: '20px' }}>bar_chart</Icon>
              <h4 style={{
  fontFamily: 'Arial',
  fontSize: '15px',
  paddingTop: '7px',
  paddingBottom: isActive("/tmt_register") ? '5px' : 'none',
  position: 'relative' // Needed for positioning the pseudo-element
}}>
  Tmt&nbsp;&nbsp;Bars
  <span style={{
    content: '""',
    display: isActive("/tmt_register") ? 'block' : 'none',
    position: 'absolute',
    bottom: -3,
    left: 18,
    width: '40%',
    height: '5px', // Adjust the height of the "border"
    backgroundColor: 'white',
    borderRadius:'3px'
  }}></span>
</h4>
            </IconButton>
            <IconButton
              className="button"
              style={{
                ...buttonStyle,
               }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
              onClick={() => navigate("/billets_register")} // Redirect on click
            >
              <Icon style={{ fontSize: '20px' }}>layers</Icon>
              <h4 style={{
  fontFamily: 'Arial',
  fontSize: '15px',
  paddingTop: '7px',
  paddingBottom: isActive("/billets_register") ? '5px'  : 'none',
  position: 'relative' // Needed for positioning the pseudo-element
}}>
  Billets
  <span style={{
    content: '""',
    display: isActive("/billets_register") ? 'block' : 'none',
    position: 'absolute',
    bottom: -3,
    left: 18,
    width: '40%',
    height: '5px', // Adjust the height of the "border"
    backgroundColor: 'white',
    borderRadius:'3px'
  }}></span>
</h4>            </IconButton>
            <IconButton
              className="button"
              style={{
                ...buttonStyle,
               }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
              onClick={() => navigate("/structures_register")} // Redirect on click
            >
              <Icon style={{ fontSize: '20px' }}>building</Icon>
              <h4 style={{
  fontFamily: 'Arial',
  fontSize: '15px',
  paddingTop: '7px',
  paddingBottom: isActive("/structures_register") ? '5px' : 'none',
  position: 'relative' // Needed for positioning the pseudo-element
}}>
  Structures
  <span style={{
    content: '""',
    display: isActive("/structures_register") ? 'block' : 'none',
    position: 'absolute',
    bottom: -3,
    left: 18,
    width: '40%',
    height: '5px', // Adjust the height of the "border"
    backgroundColor: 'white',
    borderRadius:'3px'
  }}></span>
</h4>            </IconButton>
            <IconButton
              className="button"
              style={{
                ...buttonStyle,
               }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
              onClick={() => navigate("/pipes_register")} // Redirect on click
            >
              <Icon style={{ fontSize: '20px' }}>plumbing</Icon>
              <h4 style={{
  fontFamily: 'Arial',
  fontSize: '15px',
  paddingTop: '7px',
  paddingBottom: isActive("/pipes_register") ? '5px': 'none',
  position: 'relative' // Needed for positioning the pseudo-element
}}>
  Pipes
  <span style={{
    content: '""',
    display: isActive("/pipes_register") ? 'block' : 'none',
    position: 'absolute',
    bottom: -3,
    left: 18,
    width: '40%',
    height: '5px', // Adjust the height of the "border"
    backgroundColor: 'white',
    borderRadius:'3px'
  }}></span>
</h4>            </IconButton>
          </div>
        </MDBox>
      <style jsx>{`
        .button-container {
          display: flex;
          background-color: #7b809a;
          width: 350px;
          height: 40px;
          align-items: center;
          justify-content: space-around;
          border-radius: 10px;
        }

        @media (max-width: 344px) {
          .button-container {
            width: 315px;
          }
        }
      `}</style>
    </AppBar>
  );
}

DashboardNavbarRegister.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

DashboardNavbarRegister.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
  onSearch: PropTypes.func.isRequired,
};

export default DashboardNavbarRegister;
