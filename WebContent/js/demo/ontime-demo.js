//On-Time Delivery - Chart
new Chart(document.getElementById("ontime-chart"), {
  type: 'bar',
  data: {
    labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    datasets: [{
        label: "Target",
        type: "line",
        borderColor: "#fd7e14",
        data: [100,100,100,100,100,100,100,100,100,100,100,100],
        fill: false
      }, {
        label: "Accomplishment",
        type: "line",
        borderColor: "#dc3545",
        data: [104,108,102,110,116,112,120,104,106,100,99,107],
        fill: false,
        lineTension: 0
      },
    ]
  },
  options: {
    title: {
      display: true,
      text: 'On-Time Delivery of 2019'
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
    legend: { display: true }
  }
});

//subontime - Chart
new Chart(document.getElementById("subontime-chart"), {
  type: 'line',
  data: {
    labels: ["1-Jan","2-Jan","3-Jan","4-Jan","5-Jan","6-Jan","7-Jan","8-Jan","9-Jan","10-Jan"],
    datasets: [{ 
        data: [100,100,100,100,100,100,100,100,100,100,100],
        label: "Target",
        borderColor: "#dc3545",
        fill: false
      }, { 
        data: [100,99,104,102,105,100,102,101,104,107,106],
        label: "Accomplishment",
        borderColor: "#fd7e14",
        lineTension: 0,
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'On-Time Delivery January 2019'
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