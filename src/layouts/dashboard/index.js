/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import Projects from "layouts/dashboard/components/Projects";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import typography from "assets/theme/base/typography";

// Soft UI Dashboard React components



// Soft UI Dashboard React examples







// Soft UI Dashboard React base styles


// Dashboard layout components





// Data



function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "총 잔액" }}
                count="10,250,300원"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: "paid" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "금일 수익" }}
                count="100,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "보유 주식" }}
                count="103,430원"
                percentage={{ color: "success", text: "+5%" }}
                icon={{
                  color: "info",
                  component: "shopping_cart",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "거래세" }}
                count="3,462원"
                percentage={{ color: "success" }}
                icon={{ color: "info", component: "emoji_events" }}
              />
            </Grid>

          </Grid>
        </SoftBox>
        
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <BuildByDevelopers />
            </Grid>
            <Grid item xs={12} lg={5}>
              <WorkWithTheRockets />
            </Grid>
          </Grid>
        </SoftBox>

        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <ReportsBarChart
                title="1주 수익률"
                description={
                  <>
                    지난주 대비 (<strong>+23%</strong>) 증가
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid>
            
            <Grid item xs={12} lg={7}>
              <GradientLineChart
                title="수익률 월별 변화"
                description={
                  <SoftBox display="flex" alignItems="center">
                    <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      23% 수익 {" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        in <strong>2023</strong>
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                }
                height="20.25rem"
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
