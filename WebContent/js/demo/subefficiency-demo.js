//Subefficiency1
new Chart(document.getElementById("efficiency3-chart"), {
  type: 'bar',
  data: {
    labels: ["Admin Services Dept", "Domestic", "Ford 1 MFG", "Ford 2 MFG", "GA"],
    datasets: [{
        label: "Target Efficiency",
        type: "line",
        borderColor: "#fd7e14",
        data: [100,100,100,100,100,100,100],
        fill: false
      }, {
        label: "Total Efficiency",
        type: "bar",
        backgroundColor: "rgba(31, 135, 255, 1)",
        data: [101,100,104,100,100],
        datalabels: {
          formatter: (value, ctx) => {
          
            let percentage = (value)+"%";
            return percentage;
    
          },
          color: '#fff',
          display: true
               }
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
      text: 'Total Line Efficiency - 1st Division'
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
    legend: { display: false }
  }
});

//SubEfficiency2 - Chart
new Chart(document.getElementById("efficiency4-chart"), {
  type: 'line',
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{ 
        data: [101,100,104,100,99,100,98,100,100,101,103,102],
        label: "Admin Services Dept",
        borderColor: "#dc3545",
        lineTension: 0,
        fill: false
      }, { 
        data: [78,79,77,80,77,73,64,69,63,75,77,80],
        label: "Domestic",
        borderColor: "#fd7e14",
        lineTension: 0,
        fill: false
      }, { 
        data: [112,113,113,111,109,105,108,105,105,105,105,105],
        label: "Ford 1 MFG",
        borderColor: "#ffc107",
        lineTension: 0,
        fill: false
      }, { 
        data: [89,88,81,89,89,90,87,88,84,85,89,84],
        label: "Ford 2 MFG",
        borderColor: "#28a745",
        lineTension: 0,
        fill: false
      }, { 
        data: [79,77,80,81,89,89,109,105,108,69,63,77],
        label: "GA",
        borderColor: "#007bff",
        lineTension: 0,
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
      fontSize: 14,
      text: 'Total Line of Efficiency - 1st Division'
    },
    scales: {
      yAxes: [{
                                display: true,
                                ticks: {
                                  callback: function(value, index, values) {
                                        return value + '%';
                                  },  
                                }
                            }]
    },
	legend: { display: true }
  }
});
