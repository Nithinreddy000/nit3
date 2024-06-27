import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "./dashboardstyles.css"; // Import the custom CSS here
import MDBox from "../../components/MDBox";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import ComplexStatisticsCard from "../../examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ReportsBarChart from "../../examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "../../examples/Charts/LineCharts/ReportsLineChart";
import reportsBarChartData from "../../layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "../../layouts/dashboard/data/reportsLineChartData";
import Projects from "../../layouts/dashboard/components/Projects";
import OrdersOverview from "../../layouts/dashboard/components/OrdersOverview";
import EntranceIcon from '@mui/icons-material/ExitToApp';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { scrollToRoute } from "../../examples/Sidenav"; 
import SvgIcon from '@mui/material/SvgIcon';

function WeighbridgeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4 10h16v2H4v-2zm0 4h16v2H4v-2zm0-8h16v2H4V6zM2 2h2v20H2V2zm20 0h2v20h-2V2z"/>
    </SvgIcon>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  const { sales, tasks } = reportsLineChartData;
  const [searchQuery, setSearchQuery] = useState("");
  const swiperRef = useRef(null);
  const billingRef = useRef(null);
  const invoiceRef = useRef(null);



  const handleSearch = (query) => {
    // Debounce the state update with a delay of 300 milliseconds
    setTimeout(() => {
      setSearchQuery(query.toLowerCase());
    }, 300);
  };

  const filterDivisions = (content) => {
    return content.toLowerCase().includes(searchQuery);
  };


  const handleCardClick = (route) => {
    // Navigate to the specified route
    navigate(route);
  };
  
  // Then use this function like this:
  

  

  return (
    <DashboardLayout>
      <DashboardNavbar onSearch={handleSearch} />
      <MDBox py={3} >
        <h3 style={{paddingLeft: '10px',fontFamily: 'Poppins, sans-serif',paddingTop:'0%' ,marginTop:'0%'}}>INWARD</h3>
        <div className="swiper-container">
        <Swiper
        spaceBetween={16}
        slidesPerView={4} // Default number of slides per view
        breakpoints={{
          0: {
            slidesPerView: 1, // 1 slide per view for screens from 0 to 900px
          },
          768: {
            slidesPerView: 2,  // 1 slide per view for screens up to 900px
          },
          1300: {
            slidesPerView: 4, // 4 slides per view for screens larger than 1300px
          },
          2560: {
            slidesPerView: 6, // 4 slides per view for screens larger than 1300px
          },
          // Add more breakpoints if needed
        }}
      
        modules={[Navigation]}
        navigation={{ clickable: true }}
        loop={true} 
        >

            {filterDivisions("Orders") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={() => handleCardClick("/orders")} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                        icon="shopping_cart"
                        title={<h3 style={{ fontSize: '24px' ,fontFamily: 'Poppins, sans-serif'}}>Order</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )}
            {filterDivisions("Inward Order") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={() => handleCardClick("/inward_orders")} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                        icon="inventory"
                        title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Inward Order</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )}
             {filterDivisions("WeighBridge") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={() => handleCardClick("/weighbridge_inward")} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                        icon={<WeighbridgeIcon />} 
                        title={<h3 style={{ fontSize: '20px' ,fontFamily: 'Poppins, sans-serif'}}>WeighBridge</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )} 
            {filterDivisions("Gate") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={() => handleCardClick("/gate")} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                       icon={<EntranceIcon/>}
                        title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Gate</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )}
            {filterDivisions("Weighment") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={() => handleCardClick("/weighment")} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                        icon="scale"
                        title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Weighment</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )}
            {filterDivisions("GRN") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={() => handleCardClick("/grn")} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                        icon="assignment"
                        title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>GRN</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )}
            {filterDivisions("Purchase") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={() => handleCardClick("/purchase")} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                        icon="shoppingbasket"
                        title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Purchase</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )}
            {filterDivisions("Transporting") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={() => handleCardClick("/transporting")} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                        icon="local_shipping"
                        title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Transporting</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )}
            {filterDivisions("Pending Vehicles") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={() => handleCardClick("/pending")} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                        icon={<HourglassEmptyIcon/>}
                        title={<h3 style={{ fontSize: '20px', fontFamily: 'Poppins, sans-serif' }}>Pending Vehicles</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        <h3 style={{ paddingLeft: '10px',fontFamily: 'Poppins, sans-serif' }}>OUTWARD</h3>
        <div className="swiper-container">
        <Swiper
        spaceBetween={16}
        slidesPerView={4} // Default number of slides per view
        breakpoints={{
          0: {
            slidesPerView: 1, // 1 slide per view for screens from 0 to 900px
          },
          768: {
            slidesPerView: 2,  // 1 slide per view for screens up to 900px
          },
          1300: {
            slidesPerView: 4, // 4 slides per view for screens larger than 1300px
          },
          2560: {
            slidesPerView: 6, // 4 slides per view for screens larger than 1300px
          },
          // Add more breakpoints if needed
        }}
        modules={[Navigation]}
        navigation={{ clickable: true }}
        loop={true} 
        >
            {filterDivisions("Sales Orders") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={() => handleCardClick("/sales")} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                        icon="description"
                        title={<h3 style={{ fontSize: '24px' ,fontFamily: 'Poppins, sans-serif'}}>Sales Order</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )} 
             {filterDivisions("WeighBridge") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={() => handleCardClick("/weighbridge")} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                        icon="delivery_dining"
                        title={<h3 style={{ fontSize: '20px' ,fontFamily: 'Poppins, sans-serif'}}>WeighBridge</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )} 
            {filterDivisions("Gate") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={() => handleCardClick("/gate")} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                        icon={<EntranceIcon/>}
                        title={<h3 style={{ fontSize: '24px' ,fontFamily: 'Poppins, sans-serif'}}>Gate</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )} 
            {filterDivisions("Weighment") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={() => handleCardClick("/weighment")} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                         icon="scale"
                        title={<h3 style={{ fontSize: '24px' ,fontFamily: 'Poppins, sans-serif'}}>Weighment</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )} 
           {filterDivisions("Billing") && (
  <SwiperSlide>
    <div className="card-container">
      <Grid item xs={12} md={6} lg={3}>
      <MDBox mb={1.5} onClick={() => handleCardClick("/billing2")} style={{ cursor: "pointer" }}>          
        <ComplexStatisticsCard
            icon="receipt"
            title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>Billing</h3>}
            percentage={{
              amount: (
                <div style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <div style={{ paddingBottom: '1px' }}>
                    Approval Pending: 42
                  </div>
                  <br />
                  <div style={{ paddingBottom: '1px' }}>
                    Dispatch Pending: 22
                  </div>
                  <br />
                  <div style={{ paddingBottom: '1px' }}>
                    Processing: 20
                  </div>
                </div>
              ),
            }}
          />
        </MDBox>
      </Grid>
    </div>
  </SwiperSlide>
)}

{filterDivisions("E-Invoiceing") && (
  <SwiperSlide>
    <div className="card-container">
      <Grid item xs={12} md={6} lg={3}>
      <MDBox mb={1.5} onClick={() => handleCardClick("/invoice")} style={{ cursor: "pointer" }}>          
          <ComplexStatisticsCard
            icon="event_note"
            title={<h3 style={{ fontSize: '24px', fontFamily: 'Poppins, sans-serif' }}>E-Invoiceing</h3>}
            percentage={{
              amount: (
                <div style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <div style={{ paddingBottom: '1px' }}>
                    Approval Pending: 42
                  </div>
                  <br />
                  <div style={{ paddingBottom: '1px' }}>
                    Dispatch Pending: 22
                  </div>
                  <br />
                  <div style={{ paddingBottom: '1px' }}>
                    Processing: 20
                  </div>
                </div>
              ),
            }}
          />
        </MDBox>
      </Grid>
    </div>
  </SwiperSlide>
)} 
             {filterDivisions("Sales Order") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={() => handleCardClick("/sales")} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                        icon="description"
                        title={<h3 style={{ fontSize: '24px' ,fontFamily: 'Poppins, sans-serif'}}>Sales Order</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )} 
             {filterDivisions("Dispatch Order") && (
              <SwiperSlide>
                <div className="card-container">
                  <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5} onClick={() => handleCardClick("/dispatch")} style={{ cursor: "pointer" }}>
                      <ComplexStatisticsCard
                         icon="delivery_dining"
                        title={<h3 style={{ fontSize: '20px' ,fontFamily: 'Poppins, sans-serif'}}>Dispatch Order</h3>}
                        percentage={{
                          amount: (
                            <div style={{ fontFamily: 'Poppins, sans-serif'}}>
                           <div style={{ paddingBottom: '1px' }}>
                              Approval Pending: {42}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Dispatch Pending: {22}
                            </div>
                            <br />
                            <div style={{ paddingBottom: '1px' }}>
                              Processing: {20}
                            </div>
                          </div>
                          ), 
                        }}
                      />
                    </MDBox>
                  </Grid>
                </div>
              </SwiperSlide>
            )} 
          </Swiper>
        </div>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {filterDivisions("website views") && (
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsBarChart
                    color="info"
                    title="website views"
                    description="Last Campaign Performance"
                    date="campaign sent 2 days ago"
                    chart={reportsBarChartData}
                  />
                </MDBox>
              </Grid>
            )}
            {filterDivisions("daily sales") && (
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="success"
                    title="daily sales"
                    description={
                      <>
                        (<strong>+15%</strong>) increase in today sales.
                      </>
                    }
                    date="updated 4 min ago"
                    chart={sales}
                  />
                </MDBox>
              </Grid>
            )}
            {filterDivisions("completed tasks") && (
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="dark"
                    title="completed tasks"
                    description="Last Campaign Performance"
                    date="just updated"
                    chart={tasks}
                  />
                </MDBox>
              </Grid>
            )}
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            {filterDivisions("Projects") && (
              <Grid item xs={12} md={6} lg={8}>
                <Projects />
              </Grid>
            )}
            {filterDivisions("Orders Overview") && (
              <Grid item xs={12} md={6} lg={4}>
                <OrdersOverview />
              </Grid>
            )}
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
