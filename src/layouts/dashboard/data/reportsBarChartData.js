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

const reportsBarChartData = {
  chart: {
    labels: ["4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    datasets: { label: "월별수익률", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
  },
  items: [
    {
      icon: { color: "primary", component: "library_books" },
      label: "거래대금",
      progress: { content: "~1억원", percentage: 60 },
    },
    {
      icon: { color: "info", component: "touch_app" },
      label: "거래횟수",
      progress: { content: "2000회", percentage: 90 },
    },
    {
      icon: { color: "warning", component: "payment" },
      label: "거래세",
      progress: { content: "~50만원", percentage: 30 },
    },
    {
      icon: { color: "error", component: "extension" },
      label: "수익성공횟수",
      progress: { content: "43회", percentage: 50 },
    },
  ],
};

export default reportsBarChartData;
