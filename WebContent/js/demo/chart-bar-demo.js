//Efficiency - Chart
new Chart(document.getElementById("efficiency-chart"), {
    type: 'bar',
    data: {
      labels: ["1st Div","2nd Div","3rd Div","4th Div","5th Div","6th Div","7th Div"],
      datasets: [{
          label: "Target Efficiency",
          type: "line",
          borderColor: "#fd7e14",
          data: [100,100,100,100,100,100,100],
          fill: false,
          lineTension: 0,
        }, {
          label: "Total Efficiency",
          type: "bar",
          backgroundColor: ["rgba(31, 135, 255, 1)","#dc3545","rgba(31, 135, 255, 1)","#dc3545", "#dc3545", "rgba(31, 135, 255, 1)", "#dc3545"], 
          barPercentage: 1,
          data: [101,74,108,87,86,107,86],
        },
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Total Line Efficiency of 2019'
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

//Customer Satisfaction - Chart
new Chart(document.getElementById("customersatisfaction-chart"), {
  type: 'pie',
  data: {
    labels: ["1st Div", "2nd Div", "3rd Div", "4th Div", "5th Div", "6th Div", "7th Div"],
    datasets: [{
        label: "Achievement",
        backgroundColor: ["rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 0.9)", "rgba(31, 135, 255, 0.8)", "rgba(31, 135, 255, 0.7)", "rgba(31, 135, 255, 0.6)", "#dc3545", "rgba(31, 135, 255, 0.5)"], 
        data: [4146,4326,4953,5000,8373,798,4065],
      },
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Total Customer Satisfaction of 2019'
},
legend: { display: false },
}
});

//Defects - Chart
new Chart(document.getElementById("defects-chart"), {
    type: 'pie',
    data: {
      labels: ["1st Div", "2nd Div", "3rd Div", "4th Div", "5th Div", "6th Div", "7th Div"],
      datasets: [{
          label: "Total Functional Defects per no. of line",
          type: "pie",
          backgroundColor: ["rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 0.9)", "rgba(31, 135, 255, 0.8)", "rgba(31, 135, 255, 0.7)", "#dc3545", "rgba(31, 135, 255, 0.6)", "rgba(31, 135, 255, 0.5)"],
          data: [18,14,15,12,10,19,17],
        },
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Total Functional Defects Per No. of Line 2019'
      },
scales: {
	yAxes: [{
        display: false,
        ticks: {
        beginAtZero: false,
}
        }]
},
      legend: { display: false }
    }
});

//Sales - Chart
new Chart(document.getElementById("sales-chart"), {
  type: 'bar',
  data: {
    labels: ["1st Div", "2nd Div", "3rd Div", "4th Div", "5th Div", "6th Div", "7th Div", "Others"],
    datasets: [{
        label: "Achievement",
        type: "line",
        borderColor: "#fd7e14",
        data: [97,152,120,119,166,89,103,90],
        fill: false,
        lineTension: 0,
yAxisID: 'y-axis-1'
      }, {
        label: "Sales Forecast",
        type: "bar",
        backgroundColor: ["rgba(31, 135, 255, 1)", "#dc3545", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)"],
        data: [23.3,1.3,9.6,6.8,6,9.9,4.9,5],
yAxisID: 'y-axis-2'
      }, {
        label: "Actual Sales",
        type: "bar",
        backgroundColor: ["#529dee", "#d85562", "#529dee", "#529dee", "#529dee", "#529dee", "#529dee", "#529dee"],
        data: [22.5,2,11.5,8,9.9,8.7,5,4],
yAxisID: 'y-axis-2'
      },
    ]
  },
  options: {
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
    legend: { display: false }
  }
});

//Claim - Chart
new Chart(document.getElementById("claim-chart"), {
type: 'pie',
data: {
    datasets: [{
        label: 'Total Claim of 2019',
        data: [120,48,60,72,36,24],
        backgroundColor: ["rgba(31, 135, 255, 1)","rgba(31, 135, 255, 0.8)","rgba(31, 135, 255, 0.6)","rgba(31, 135, 255, 0.4)","rgba(31, 135, 255, 0.2)","#dc3545"],
    }],
    labels: ["Customer", "Receiving", "Ads", "Sample", "ISIR", "YI/QI"],
    
},
options: {
  title: {
    display: true,
      text: 'Total Claim of 2019'
  },
  legend: { display: false }
},
});

//Abnormality - Chart
new Chart(document.getElementById("abnormality-chart"), {
  type: 'pie',
  data: {
    labels: ["1st Div", "2nd Div", "3rd Div", "4th Div", "5th Div", "6th Div", "7th Div"],
    datasets: [{
        label: "Achievement",
        type: "pie",
        backgroundColor: ["rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 0.9)", "rgba(31, 135, 255, 0.8)", "rgba(31, 135, 255, 0.7)", "#dc3545", "rgba(31, 135, 255, 0.6)", "rgba(31, 135, 255, 0.5)"], 
        data: [64,59,58,61,56,65,60],
      },
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Overall Abnormality of 2019'
    },
scales: {
yAxes: [{
      display: false,
      ticks: {
      beginAtZero: true,
      }
      }]
},
    legend: { display: false }
}
});

