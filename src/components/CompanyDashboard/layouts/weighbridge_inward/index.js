import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MDBox from "../../components/MDBox";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbarRegister from "../../examples/navbar_weighbridge/DashboardNavbar";
import Footer from "../../examples/Footer";
import SidenavRegister from "../../examples/sidenav_weighbridge";
import Tmtroutes from "../../weighbridge_routes";
import '../register_focus.css';
import Stats_card_for_register from "../../examples/Cards/Stats_card_for_register";
import MDTypography from "../../components/MDTypography";
import { Grid } from "@mui/material";
import image1 from '../../../assets/1.png'
import image2 from '../../../assets/2.png'
import image3 from '../../../assets/3.png'
import image4 from '../../../assets/4.png'

function WeighBridge() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedId, setHighlightedId] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedWeighbridge, setSelectedWeighbridge] = useState(null);
  const [showImages, setShowImages] = useState({});
  const [openModal, setOpenModal] = useState(false);


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
    { Headers: 'WeighBridge', id: "we1", id2: 'w1', name: "WeighBridge 1", company: "T R ISPAT & POWER1", product: "TMT Bar 500 mts @ 40,500/EX1", orderDate: "24-04-2024 | OUT/APR/491", quantity: "390 mts | 15.25 lakhs1", images: [image1, image2, image3, image4] },
    { id: "we2", id2: 'w2', name: "WeighBridge 2", company: "T R ISPAT & POWER", product: "TMT Bar 400 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs", images: [image1, image2, image3, image4] },
    { id: "we3", id2: 'w3', name: "WeighBridge 3", company: "T R ISPAT & POWER", product: "TMT Bar 600 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs", images: [image1, image2, image3, image4] },
    { id: "we4", id2: 'w4', name: "WeighBridge 4", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs", images: [image1, image2, image3, image4] },
    { id: "we5", id2: 'w5', name: "WeighBridge 5", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs", images: [image1, image2, image3, image4] },
    { id: "we6", id2: 'w6', name: "WeighBridge 6", company: "T R ISPAT & POWER", product: "TMT Bar 400 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs", images: [image1, image2, image3, image4] },
    { id: "we7", id2: 'w7', name: "WeighBridge 7", company: "T R ISPAT & POWER", product: "TMT Bar 600 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs", images: [image1, image2, image3, image4] },
    { id: "we8", id2: 'w8', name: "WeighBridge 8", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs", images: [image1, image2, image3, image4] },
    { id: "we9", id2: 'w9', name: "WeighBridge 9", company: "T R ISPAT & POWER1", product: "TMT Bar 500 mts @ 40,500/EX1", orderDate: "24-04-2024 | OUT/APR/491", quantity: "390 mts | 15.25 lakhs1", images: [image1, image2, image3, image4] },
    { id: "we10", id2: 'w10', name: "WeighBridge 10", company: "T R ISPAT & POWER", product: "TMT Bar 400 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" , images: [image1, image2, image3, image4]},
    { id: "we11", id2: 'w11', name: "WeighBridge 11", company: "T R ISPAT & POWER", product: "TMT Bar 600 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" , images: [image1, image2, image3, image4]},
    { id: "we12", id2: 'w12', name: "WeighBridge 12", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" , images: [image1, image2, image3, image4]},
    { id: "we13", id2: 'w13', name: "WeighBridge 13", company: "T R ISPAT & POWER1", product: "TMT Bar 500 mts @ 40,500/EX1", orderDate: "24-04-2024 | OUT/APR/491", quantity: "390 mts | 15.25 lakhs1", images: [image1, image2, image3, image4] },
    { id: "we14", id2: 'w14', name: "WeighBridge 14", company: "T R ISPAT & POWER", product: "TMT Bar 400 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs", images: [image1, image2, image3, image4] },
    { id: "we15", id2: 'w15', name: "WeighBridge 15", company: "T R ISPAT & POWER", product: "TMT Bar 600 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" , images: [image1, image2, image3, image4]},
    { id: "we16", id2: 'w16', name: "WeighBridge 16", company: "T R ISPAT & POWER", product: "TMT Bar 700 mts @ 40,500/EX", orderDate: "24-04-2024 | OUT/APR/49", quantity: "390 mts | 15.25 lakhs" , images: [image1, image2, image3, image4]},
  ];

  useEffect(() => {
    if (selectedWeighbridge) {
      const element = document.getElementById(selectedWeighbridge);
      if (element) {
        element.scrollIntoView({ behavior: 'instant', block: 'center' });
      }
    }
  }, [selectedWeighbridge]);

  const toggleImage = (id, hideOverlay = false) => {
    setShowImages((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  
    if (hideOverlay) {
      setOpenModal(false);
      document.body.classList.remove('disable-scroll'); // Unlock scrolling on body
    } else {
      setOpenModal(true);
      document.body.classList.add('disable-scroll'); // Lock scrolling on body
    }
  };
  

  const renderImages = (detail) => {
    if (detail.images && showImages[detail.id]) {
      return (
        <div className="image-popup">
          <div className="image-slider">
            {detail.images.map((image, index) => (
              <img key={index} src={image} alt="Weighbridge Image" className="slider-image" />
            ))}
          </div>
          <button className="btn btn-secondary close-btn">
  Close
</button>
        </div>
      );
    }
    return null;
  };

  const handleWeighbridgeClick = (key, id) => {
    setSelectedWeighbridge(key);
    setHighlightedId(key);
    toggleImage(id);
  };

  return (
    <DashboardLayout>
      <DashboardNavbarRegister onSearch={handleSearch} />
      <MDBox py={3}>
        <SidenavRegister routes={Tmtroutes} onItemClick={handleWeighbridgeClick} />
        {details.filter(filterDetails).map((detail, index) => {
          const isHeader = detail.Headers;
          return (
            <React.Fragment key={index}>
              {isHeader && (
                <h3
                  id={detail.id}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'left', height: 'auto', paddingBottom: '0%', paddingTop: '1vh', marginRight: '30vh', fontSize: '25px' }}>
                  {detail.Headers}
                </h3>
              )}
              <div ref={sectionRefs.current[detail.id2]} id={detail.id} className="card-container"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'auto', paddingBottom: '0%', paddingTop: '4vh', marginRight: '8vh'}}>
                <div className={highlightedId === detail.id ? 'highlighted' : ''} >
                  <MDBox mb={1.5} style={{ cursor: "pointer" }} onClick={() => handleWeighbridgeClick(detail.id, detail.id)}>
                    <Stats_card_for_register
                      icon="whatshot"
                      imagesShown={showImages[detail.id]}
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
                    {renderImages(detail)}
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
          .image-popup {
  position: absolute;
  top:-72%; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.image-slider {
  display: flex;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
}

.slider-image {
  width: 200px;
  height: 150px;
  margin-right: 10px;
}

.close-btn {
  display: block;
  margin-top: 10px;
   cursor: pointer; /* Ensure it shows the pointer cursor */
}
@media (max-width: 600px) {
  .image-popup {
    width: 100vw; /* Full viewport width */
    height:100vh; /* Full viewport height */
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column; /* Stack children vertically */
    justify-content: space-between; /* Align items with space between them */
    align-items: center;
   padding: 30px 80px 10px; /* Padding around images */
    z-index: 2000;
  }



  .image-slider {
    flex: 1; /* Take remaining vertical space */
    display: flex;
    flex-direction: column; /* Stack images vertically */
    align-items: center; /* Center align images */
    overflow-y: auto; /* Allow vertical scrolling for images */
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
    width: 100%; /* Take full width of the popup */
    max-height: calc(100vh - 100px);
  }

  .slider-image {
    width: 100%; /* Take up full width of the popup */
    height: auto; /* Allow images to scale proportionally */
  }

  .close-btn {
    position: absolute; /* Ensure it's positioned absolutely */
    bottom: 20px; /* Adjust the distance from the bottom */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%);
    z-index: 2100; /* Ensure it's above the popup */
    cursor: pointer;
  }
}




      `}</style>
    </DashboardLayout>
  );
}


export default WeighBridge;
