import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import TmtRegister from "./components/CompanyDashboard/layouts/tmt_register";

import LicenseValidation from './components/LicenseValidation/LicenseValidation';
import CompanySelection from './components/CompanySelection/CompanySelection';
import CompanyLogin from './components/CompanyLogin/CompanyLogin';
import BlankPage from './components/CompanyProfile/CompanyProfile';
import CompanyDashboard from './components/CompanyDashboard/layouts/dashboard/index';
import SignOut from "./components/CompanyDashboard/layouts/authentication/sign-out";    

import MDBox from "./components/CompanyDashboard/components/MDBox";
import Sidenav from "./components/CompanyDashboard/examples/Sidenav";
import Configurator from "./components/CompanyDashboard/examples/Configurator";
import theme from "./components/CompanyDashboard/assets/theme";
import themeRTL from "./components/CompanyDashboard/assets/theme/theme-rtl";
import themeDark from "./components/CompanyDashboard/assets/theme-dark";
import themeDarkRTL from "./components/CompanyDashboard/assets/theme-dark/theme-rtl";
import routes from "./components/CompanyDashboard/routes";
import { MaterialUIControllerProvider, useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "./components/CompanyDashboard/context";

import brandWhite from "../src/components/assets/infinityX.png";
import brandDark from "../src/components/assets/infinityX.png";
import './styles1.css'


function DashboardContent() {
    const [controller, dispatch] = useMaterialUIController();
    const {
        miniSidenav,
        direction,
        layout,
        openConfigurator,
        sidenavColor,
        transparentSidenav,
        whiteSidenav,
        darkMode,
    } = controller;
    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const [rtlCache, setRtlCache] = useState(null);
    const { pathname } = useLocation();

    useMemo(() => {
        const cacheRtl = createCache({
            key: "rtl",
            stylisPlugins: [rtlPlugin],
        });
        setRtlCache(cacheRtl);
    }, []);

    const handleOnMouseEnter = () => {
        if (miniSidenav && !onMouseEnter) {
            setMiniSidenav(dispatch, false);
            setOnMouseEnter(true);
        }
    };

    const handleOnMouseLeave = () => {
        if (onMouseEnter) {
            setMiniSidenav(dispatch, true);
            setOnMouseEnter(false);
        }
    };

    const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

    useEffect(() => {
        document.body.setAttribute("dir", direction);
    }, [direction]);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, [pathname]);

    const getRoutes = (allRoutes) =>
        allRoutes.map((route) => {
            if (route.collapse) {
                return getRoutes(route.collapse);
            }

            if (route.route) {
                return <Route exact path={route.route} element={route.component} key={route.key} />;
            }

            return null;
        });

    
    return direction === "rtl" ? (
        <CacheProvider value={rtlCache}>
            <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
                <CssBaseline />
                {layout === "dashboard" && (
                    <>
                        <Sidenav
                         color={sidenavColor}
                         brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
                         routes={routes}
                         onMouseEnter={handleOnMouseEnter}
                         onMouseLeave={handleOnMouseLeave}
                        />
                        <Configurator />
                    </>
                )}
                {layout === "vr" && <Configurator />}
                <Routes>
                    <Route path="/" element={<CompanyDashboard />} />
                    {getRoutes(routes)}
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
            </ThemeProvider>
        </CacheProvider>
    ) : (
        <ThemeProvider theme={darkMode ? themeDark : theme}>
            <CssBaseline />
            {layout === "dashboard" && (
                <>
                    <Sidenav
                        color={sidenavColor}
                        brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
                        routes={routes}
                        onMouseEnter={handleOnMouseEnter}
                        onMouseLeave={handleOnMouseLeave}
                    />
                    <Configurator />
                </>
            )}
            {layout === "vr" && <Configurator />}
            <Routes>
                <Route path="/" element={<CompanyDashboard />} />
                {getRoutes(routes)}
                <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
        </ThemeProvider>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LicenseValidation />} />
                <Route path="/CompanySelection" element={<CompanySelection />} />
                <Route path="/CompanyLogin" element={<CompanyLogin />} />
                <Route path="/CompanyProfile" element={<BlankPage />} />
                <Route path="/authentication/sign-out" element={<SignOut />} />
                <Route
                    path="*"
                    element={
                        <MaterialUIControllerProvider>
                            <DashboardContent />
                        </MaterialUIControllerProvider>
                    }
                />
                <Route path="/tmt-register" element={<TmtRegister />} />
                <Route path="/tmt_register/:routeId" element={<TmtRegister />} />
            </Routes>
        </Router>
    );
}

export default App;