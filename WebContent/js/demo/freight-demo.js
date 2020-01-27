
//freight chart
var ctx = document.getElementById("myFreightChart");
var myFreightChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Parts","Products"],
    datasets: [{
        label: "Total Freight Air Cost",
        type: "bar",
        backgroundColor: "rgba(31, 135, 255, 1)",
        data: [175,32],
      },
    ]
  },
  options: {
    plugins: {
      datalabels: {
         // hide datalabels for all datasets
         display: true,
         color: '#fff'
      }
    },
    title: {
      display: true,
      text: 'Total Air Freight Cost of 2019 (In Thousand U.S Dollars)'
    },
scales: {
yAxes: [{
                          display: true,
                          ticks: {
                            callback: function(value, index, values) {
                                  return '$' + value;
                            },
                              beginAtZero: true,     
                          }
                      }]
},
    legend: { display: false }
  }
});

//freight2 - Chart
new Chart(document.getElementById("freight2-chart"), {
  type: 'bar',
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{
        label: "Parts",
        type: "bar",
        backgroundColor: "rgba(31, 135, 255, 1)",
        data: [29,39,32,26,21,69,1,9,7,0,0,0],
yAxisID: 'y-axis-2'
      }, {
        label: "Products",
        type: "bar",
        backgroundColor: "rgba(253, 162, 43, 1)",
        data: [11,1,6,3,0.1,0.2,0.3,0.3,5,3,0,0],
yAxisID: 'y-axis-2'
      },
    ]
  },
  options: {
    plugins: {
      datalabels: {
         // hide datalabels for all datasets
         display: true,
         color: '#fff'
      }
    },
    title: {
      display: true,
      text: 'Freight of Parts & Products (In Thousand U.S Dollars)'
    },
scales: {
yAxes: [{
                  type: "linear",
                  display: true,
                  position: "left",
                  id: "y-axis-2",
                  gridLines:{
                      display: true
                  },
                  ticks: {
                    callback: function(value, index, values) {
                          return '$' + value;
                    },  
                  },
                  labels: {
                      show:true,          
                  }
              }]
},
    legend: { display: true }
  }
});

