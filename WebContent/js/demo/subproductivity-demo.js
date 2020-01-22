//Subproductivity - Chart
new Chart(document.getElementById("subproductivity-chart"), {
  type: 'bar',
  data: {
    labels: ["1st Div", "2nd Div", "3rd Div", "4th Div", "5th Div", "6th Div", "7th Div", "8th Div"],
    datasets: [{
        label: "Target",
        type: "line",
        borderColor: "#dc3545",
        data: [100,100,100,100,100,100,100,100],
        fill: false
      }, {
        label: "OPL",
        type: "bar",
        backgroundColor: "rgba(31, 135, 255, 1)",
        data: [95,103,97,121,93,167,119,100],
      },
      {
        label: "OPR",
        type: "bar",
        backgroundColor: "rgba(253, 162, 43, 1)",
        data: [103,95,103,97,121,93,185,100],
      },
      {
        label: "ISP",
        type: "bar",
        backgroundColor: "rgba(150, 150, 150, 1)",
        data: [121,95,93,110,122,88,147,100],
      },
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Productivity Performance - All Divisions'
    },
scales: {
yAxes: [{
                          display: true,
                          ticks: {
                            callback: function(value, index, values) {
                                  return value + '%';
                            },
                              beginAtZero: true,     
                          }
                      }]
},
    legend: { display: true }
  }
});

//Subproductivity1 - Chart
new Chart(document.getElementById("subproductivity1-chart"), {
  type: 'bar',
  data: {
    labels: ["1st Div", "2nd Div", "3rd Div", "4th Div", "5th Div", "6th Div", "7th Div", "8th Div"],
    datasets: [{
        label: "Target",
        type: "line",
        borderColor: "#fd7e14",
        data: [100,100,100,100,100,100,100,100],
        fill: false
      }, {
        label: "OPL",
        type: "bar",
        backgroundColor: ["#dc3545","rgba(31, 135, 255, 1)","#dc3545","rgba(31, 135, 255, 1)","#dc3545","rgba(31, 135, 255, 1)","rgba(31, 135, 255, 1)","rgba(31, 135, 255, 1)"],
        data: [95,103,97,121,93,167,119,100],
      },
    ]
  },
  options: {
    title: {
      display: true,
      text: 'OPL - All Divisions'
    },
scales: {
yAxes: [{
                          display: true,
                          ticks: {
                            callback: function(value, index, values) {
                                  return value + '%';
                            },
                              beginAtZero: true,     
                          }
                      }]
},
    legend: { display: true }
  }
});