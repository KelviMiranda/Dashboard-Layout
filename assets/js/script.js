/* ApexChart */

var options = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: "bar",
      height: 250, // make this 250
      sparkline: {
        enabled: true, // make this true
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };
  
  const apexChart = document.querySelector("#apex1");
  let chart = new ApexCharts(apexChart, options);
  chart.render();



  /* Sidebar Toggle Code */

  /* const sidebarOpen = false; */
  const sidebar = document.getElementById("sidebar");
  const sidebarCloseIcon = document.getElementById("sidebarIcon");
  const navIcon = document.querySelector("#navIcon")
  const toggleSidebar = () => {
    if(sidebar){
        sidebar.classList.add("sidebar__responsive");
        /* sidebarOpen = true; */
    }
  }


  function closeSidebar(){
    if(sidebar){
        sidebar.classList.remove("sidebar__responsive");
        /* sidebarOpen = false; */
    }
  }

  navIcon.addEventListener("click", toggleSidebar);
  sidebarCloseIcon.addEventListener("click", closeSidebar)