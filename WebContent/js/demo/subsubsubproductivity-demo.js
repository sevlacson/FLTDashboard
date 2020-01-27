//subsubsubproductivity - Chart
new Chart(document.getElementById("subsubsubproductivity-chart"), {
  type: 'line',
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{ 
        data: [100,100,100,100,100,100,100,100,100,100,100,100],
        label: "Target",
        borderColor: "#dc3545",
        fill: false
      }, { 
        data: [100,101,99,98,102,104,100,96,101,99,102,98],
        label: "OPL",
        borderColor: "#fd7e14",
        lineTension: 0,
        datalabels: {
          // display labels for this specific dataset
          display: true,
        },
        fill: false
      }, { 
        data: [101,99,98,102,100,105,95,98,102,99,101,100],
        label: "OPR",
        borderColor: "#ffc107",
        lineTension: 0,
        datalabels: {
          // display labels for this specific dataset
          display: true,
        },
        fill: false
      }, { 
        data: [99,96,95,105,105,100,98,102,101,99,99,101],
        label: "ISP",
        borderColor: "#28a745",
        lineTension: 0,
        datalabels: {
          // display labels for this specific dataset
          display: true,
        },
        fill: false
      }
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
    text: 'Productivity Performance - ADMIN SERVICES DEPT'
  },
scales: {
yAxes: [{
                        display: true,
                        ticks: {
                          callback: function(value, index, values) {
                                return value + '%';
                          },
                            beginAtZero: false,     
                        }
                    }]
},
  legend: { display: true}
}
});