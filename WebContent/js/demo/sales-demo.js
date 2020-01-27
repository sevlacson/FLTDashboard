//Sales - Chart
new Chart(document.getElementById("sales1-chart"), {
  type: 'bar',
  data: {
    labels: ["1st Div", "2nd Div", "3rd Div", "4th Div", "5th Div", "6th Div", "7th Div", "Others"],
    datasets: [{
        label: "Achievement",
        type: "line",
        borderColor: "#fd7e14",
        data: [97,152,120,119,166,89,103,90],
        lineTension: 0,
        fill: false,
yAxisID: 'y-axis-1'
      }, {
        label: "Sales Forecast",
        type: "bar",
        backgroundColor: ["rgba(31, 135, 255, 1)", "#dc3545", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)"],
        data: [23.3,1.3,9.6,6.8,6,9.9,4.9,5],
        datalabels: {
          // display labels for this specific dataset
          display: true,
          color: '#fff'
        },
yAxisID: 'y-axis-2'
      }, {
        label: "Actual Sales",
        type: "bar",
        backgroundColor: ["#529dee", "#d85562", "#529dee", "#529dee", "#529dee", "#529dee", "#529dee", "#529dee"],
        data: [22.5,2,11.5,8,9.9,8.7,5,4],
        datalabels: {
          // display labels for this specific dataset
          display: true,
          color: '#fff'
        },
yAxisID: 'y-axis-2'
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
      text: 'Sales of December 2019 (in Million U.S Dollars)'
    },
scales: {
yAxes: [{
                  type: "linear",
                  display: true,
                  position: "left",
                  id: "y-axis-2",
                  gridLines:{
                      display: false
                  },
                  ticks: {
                    callback: function(value, index, values) {
                          return '$' + value;
                    },  
                  },
                  labels: {
                      show:true,          
                  }
              }, {
                  type: "linear",
                  display: true,
                  position: "right",
                  id: "y-axis-1",
                  gridLines:{
                      display: false
                  },
                  ticks: {
                    callback: function(value, index, values) {
                          return value + '%';
                    },  
                  },
                  labels: {
                      show: true,  
                  }
              }]
},
    legend: { display: true }
  }
});

//sales2 - Chart
new Chart(document.getElementById("sales2-chart"), {
  type: 'line',
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{ 
        data: [64.3,65.3,45,78.5,60.3,56.5,64.3,64.3,64.3,36.5,45.3,64.3],
        label: "Sales Forcast",
        borderColor: "#dc3545",
        fill: false,
        lineTension: 0
      }, { 
        data: [67.9,69,52.7,80,56,50.5,67.9 ,67.9 ,67.9 ,40.5 ,40.5,67.9],
        label: "Actual Sales",
        borderColor: "#fd7e14",
        fill: false,
        lineTension: 0
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
      text: 'Sales of 2019 (in Million U.S Dollars)'
    },
    scales: {
      yAxes: [{
                                display: true,
                                ticks: {
                                  callback: function(value, index, values) {
                                        return '$' + value;
                                  },  
                                }
                            }]
    },
	legend: { display: true }
  }
});