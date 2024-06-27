import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// @mui/material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";

function Stats_card_for_register({ color, title, count, percentage, icon, details ,imagesShown }) {
  const cardRef = useRef(null);

  useEffect(() => {
    // Measure initial dimensions of the card
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect();
      // No need to store initial dimensions if expanding/collapsing is removed
    }
  }, []);

  const isMobile = useMediaQuery('(min-width: 400px) and (max-width: 700px)');
  const isiPhone678 = useMediaQuery('(min-width: 375px) and (max-width: 425px)');
  const isiPhone12 = useMediaQuery('(min-width: 390px) and (max-width: 428px)');
  const istablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  const istabletpro = useMediaQuery('(min-width: 1024px) and (max-width: 1100px)');
  const isLargerDevice = useMediaQuery('(min-width: 960px)');
  const isiPhoneSE = useMediaQuery('(min-width: 375px) and (max-width: 425px)');

  const getCardStyles = () => {
    
    return {
      cursor: "pointer",
      marginTop: "-30px",
      height: '155px',
      marginBottom: {
        xs: "0px", // Mobile view
        md: "-5px" // Default larger devices
      },
      transition: "all 0.3s ease",
      // Apply marginLeft only for larger devices
      ...(isLargerDevice && {
        marginLeft: '5vh',
      }),
 '@media (min-width: 768px)': {
  marginLeft: '5vh',
  marginRight: '-5vh', // Increase width for larger devices
},
      
    };
  };

  return (
    <Card ref={cardRef} sx={getCardStyles()} style={{ width:  window.innerWidth >= 425 ? "110%" : window.innerWidth >= 375 ? "124%" : window.innerWidth >= 320 ? "127%" :'100%',}}>
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
       
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {title}
          </MDTypography>
          <MDTypography variant="h4">{count}</MDTypography>
        </MDBox>
      </MDBox>
      <Divider sx={{ marginTop: '0px' }} />
      <MDBox pb={0} px={1} mt={0}>
        <MDTypography component="p" variant="button" color="text" display="flex">
          <MDTypography
            component="span"
            variant="button"
            fontWeight="bold"
            color={percentage.color}
          >
            {percentage.amount}
          </MDTypography>
          &nbsp;{percentage.label}
        </MDTypography>
        {/* Removed the expand/collapse button */}
        <MDBox
        >
          <MDTypography variant="body2" color="textSecondary">
            {details}
          </MDTypography>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ComplexStatisticsCard
Stats_card_for_register.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
  details: "",
};

// Typechecking props for the ComplexStatisticsCard
Stats_card_for_register.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
  details: PropTypes.node, // Accepts nodes (JSX)
  imagesShown: PropTypes.bool,
};

export default Stats_card_for_register;
