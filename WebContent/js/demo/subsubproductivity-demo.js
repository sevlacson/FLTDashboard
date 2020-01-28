//subsubproductivity - Chart
new Chart(document.getElementById("subsubproductivity-chart"), {
  type: 'bar',
  data: {
    labels: ["Admin Services Dept", "Domestic", "Ford 1 MFG","Ford 2 MFG", "GA"],
    datasets: [{
        label: "Target",
        type: "line",
        borderColor: "#dc3545",
        data: [100,100,100,100,100],
        fill: false
      }, {
        label: "OPL",
        type: "bar",
        backgroundColor: "rgba(31, 135, 255, 1)",
        data: [100,103,118,105,50],
        datalabels: {
          // display labels for this specific dataset
          display: true,
          color: '#fff'
        },
      },
      {
        label: "OPR",
        type: "bar",
        backgroundColor: "rgba(253, 162, 43, 1)",
        data: [40,125,117,133,100],
        datalabels: {
          // display labels for this specific dataset
          display: true,
          color: '#fff'
        },
      },
      {
        label: "ISP",
        type: "bar",
        backgroundColor: "rgba(150, 150, 150, 1)",
        data: [100,157,148,100,100],
        datalabels: {
          // display labels for this specific dataset
          display: true,
          color: '#fff'
        },
      },
    ]
  },
  options: {plugins: {
    datalabels: {
       // hide datalabels for all datasets
       display: false
    }
  },
    title: {
      display: true,
      fontSize: 14,
      text: 'Productivity Performance - 1st Division'
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

//Subsubproductivity1 - Chart
new Chart(document.getElementById("subsubproductivity1-chart"), {
  type: 'bar',
  data: {
    labels: ["Admin Services Dept", "Domestic", "Ford 1 MFG","Ford 2 MFG", "GA"],
    datasets: [{
        label: "Target",
        type: "line",
        borderColor: "#fd7e14",
        data: [100,100,100,100,100,100,100],
        fill: false
      }, {
        label: "OPL",
        type: "bar",
        backgroundColor: ["rgba(31, 135, 255, 1)","rgba(31, 135, 255, 1)","rgba(31, 135, 255, 1)","rgba(31, 135, 255, 1)","#dc3545"],
        data: [100,103,118,105,50], 
        datalabels: {
          // display labels for this specific dataset
          display: true,
          color: '#fff'
        }, 
      },
    ]
  },
  options: {plugins: {
    datalabels: {
       // hide datalabels for all datasets
       display: false
    }
  },
    title: {
      display: true,
      fontSize: 14,
      text: 'OPL - 1st Division'
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