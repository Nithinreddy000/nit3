import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MDBox from "../../components/MDBox";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbarRegister from "../../examples/navbar_register/DashboardNavbar";
import Footer from "../../examples/Footer";
import SidenavRegister from "../../examples/sidenav_register";
import Tmtroutes from "../../tmt_routes";
import '../register_focus.css';
import Stats_card_for_register from "../../examples/Cards/Stats_card_for_register";
import MDTypography from "../../components/MDTypography";
import { Grid } from "@mui/material";


function TmtRegister() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedId, setHighlightedId] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSearch = (query) => {
    setTimeout(() => {
      setSearchQuery(query.toLowerCase());
    }, 300);
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value || "");
  };

  const sectionRefs = useRef({});
  useEffect(() => {
    details.forEach(detail => {
      sectionRefs.current[detail.id2] = React.createRef();
    });
  }, []);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const filterDetails = (detail) => {
    const normalizedSearchQuery = searchQuery.toLowerCase().trim();
    return (
      detail.name?.toLowerCase().includes(normalizedSearchQuery) ||
      detail.company?.toLowerCase().includes(normalizedSearchQuery) ||
      detail.product?.toLowerCase().includes(normalizedSearchQuery) ||
      detail.orderDate?.toLowerCase().includes(normalizedSearchQuery) ||
      detail.quantity?.toLowerCase().includes(normalizedSearchQuery) ||
      detail.id?.toLowerCase().includes(normalizedSearchQuery) ||
      detail.id2?.toLowerCase().includes(normalizedSearchQuery)
    );
  };

  const details = [
    { Headers: 'Tmt Bars', id: "sanjay", id2: 't1', name: "SANJAY K.P", company: "T R ISPAT & POWER1", product: "TMT Bar 500 mts @ 40,500/EX1", orderDate: "24-04-2024 | OUT/APR/491", quantity: "390 mts | 15.25 lakhs1" },
    { id: "jaidev", id2: 't2', name: "JAIDEV S", company: "T R ISPAT & POWER", product: "TMT Bar 400 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    { id: "arun", id2: 't3', name: "ARUN P.S", company: "T R ISPAT & POWER", product: "TMT Bar 600 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    { id: "kappor", id2: 't4', name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    { Headers: 'Billets', id: "sanjay2", id2: 't5', name: "SANJAY K.P", company: "T R ISPAT & POWER1", product: "TMT Bar 500 mts @ 40,500/EX1", orderDate: "24-04-2024 | OUT/APR/491", quantity: "390 mts | 15.25 lakhs1" },
    { id: "jaidev2", id2: 't6', name: "JAIDEV S", company: "T R ISPAT & POWER", product: "TMT Bar 400 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    { id: "arun2", id2: 't7', name: "ARUN P.S", company: "T R ISPAT & POWER", product: "TMT Bar 600 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    { id: "kappor2", id2: 't8', name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    { Headers: 'Structures', id: "sanjay3", id2: 't9', name: "SANJAY K.P", company: "T R ISPAT & POWER1", product: "TMT Bar 500 mts @ 40,500/EX1", orderDate: "24-04-2024 | OUT/APR/491", quantity: "390 mts | 15.25 lakhs1" },
    { id: "jaidev3", id2: 't10', name: "JAIDEV S", company: "T R ISPAT & POWER", product: "TMT Bar 400 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    { id: "arun3", id2: 't11', name: "ARUN P.S", company: "T R ISPAT & POWER", product: "TMT Bar 600 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    { id: "kappor3", id2: 't12', name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    { Headers: 'Pipes', id: "sanjay4", id2: 't13', name: "SANJAY K.P", company: "T R ISPAT & POWER1", product: "TMT Bar 500 mts @ 40,500/EX1", orderDate: "24-04-2024 | OUT/APR/491", quantity: "390 mts | 15.25 lakhs1" },
    { id: "jaidev4", id2: 't14', name: "JAIDEV S", company: "T R ISPAT & POWER", product: "TMT Bar 400 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    { id: "arun4", id2: 't15', name: "ARUN P.S", company: "T R ISPAT & POWER", product: "TMT Bar 600 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
    { id: "kappor4", id2: 't16', name: "KAPPOR'S", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbarRegister onSearch={handleSearch} />
      <MDBox py={3}>
        <SidenavRegister
          routes={Tmtroutes}
          onItemClick={(id) => {
            const headerElement = document.getElementById(id);
            if (headerElement) {
              headerElement.scrollIntoView({ behavior: 'instant', block: 'center' });
            }
          }}
          onItemClick2={(id2) => {
  const element = sectionRefs.current[id2];
  if (element && element.current) {
    element.current.scrollIntoView({ behavior: 'instant', block: 'center' });
    setHighlightedId(id2); // Set highlighted ID here
  }
}}
        />

        {details.filter(filterDetails).map((detail, index) => {
          const isHeader = detail.Headers;
          return (
            <React.Fragment key={index}>
              {isHeader && (
                <h3
                  id={detail.id}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'left', height: 'auto', paddingBottom: '0%', paddingTop: '1vh', marginRight: '30vh' ,fontSize:'25px'}}>
                  {detail.Headers}
                </h3>
              )}
              <div ref={sectionRefs.current[detail.id2]} id={detail.id} className="card-container"
 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'auto', paddingBottom: '0%', paddingTop: '4vh', marginRight: '8vh' }}>
                <div className={highlightedId === detail.id2 ? 'highlighted' : ''}>
                  <MDBox mb={1.5} style={{ cursor: "pointer" }}>
                    <Stats_card_for_register
                      icon="whatshot"
                      title={<h3 style={{ fontSize: '20px', fontFamily: 'Poppins, sans-serif' }}>{detail.name}</h3>}
                      percentage={{
                        amount: (
                          <MDTypography variant="body2" color="textSecondary" paddingLeft="10px" paddingRight="10px" paddingBottom="-10px">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0px' }}>
                              <b><p style={{ marginBottom: '0px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>{detail.company}</p></b>
                              <b><div className="badge bg-secondary mb-4" style={{ justifyContent: 'flex-end' }}>Status</div></b>
                            </div>
                            <div style={{ marginTop: '-17px' }}>
                              <b><p style={{ marginBottom: '10px', fontSize: '12px', fontFamily: 'Poppins, sans-serif', display: "flex" }}>{detail.product}</p></b>
                              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '-10px' }}>
                                <b><p style={{ marginBottom: '0px', fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>{detail.orderDate}</p></b>
                                <b><p style={{ marginBottom: '0px', color: 'red', fontWeight: 'bold', fontSize: '12px' }}>&nbsp;&nbsp;{detail.quantity}</p></b>
                              </div>
                            </div>
                          </MDTypography>
                        ),
                      }}
                    />
                  </MDBox>
                </div>
              </div>
            </React.Fragment>
          );
        })}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
      <style jsx>{`
     @media (max-width: 344px) {
          h3 {
            margin-right: 10vh !important;
          }
          .card-container {
            margin-right: 6vh !important;
          }
          h3#sanjay,
          h3#sanjay2,
          h3#sanjay3,
          h3#sanjay4 {
            margin-right: 20vh !important; /* Adjust for specific headers */
          }
        }
          @media (max-width:1366px){
           h3#sanjay,
          h3#sanjay2,
          h3#sanjay3,
          h3#sanjay4 {
            margin-right: 15vh !important; /* Adjust for specific headers */
          }
          }
           @media (min-width:375px){
           h3#sanjay,
          h3#sanjay2,
          h3#sanjay3,
          h3#sanjay4 {
            margin-right: 25vh !important; /* Adjust for specific headers */
          }
          }
            @media (min-width:425px){
           h3#sanjay,
          h3#sanjay2,
          h3#sanjay3,
          h3#sanjay4 {
            margin-right: 35vh !important; /* Adjust for specific headers */
          }
          }
          @media (min-width:1440px){
           h3#sanjay,
          h3#sanjay2,
          h3#sanjay3,
          h3#sanjay4 {
            margin-right: 25vh !important; /* Adjust for specific headers */
          }
          }
           @media (min-width:2560px){
           h3#sanjay,
          h3#sanjay2,
          h3#sanjay3,
          h3#sanjay4 {
            margin-right: 10vh !important; /* Adjust for specific headers */
          }
          }
          
      `}</style>
    </DashboardLayout>
  );
}

export default TmtRegister;
