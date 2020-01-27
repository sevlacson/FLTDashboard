//CollectionRate - Chart
new Chart(document.getElementById("collection-chart"), {
  type: 'bar',
  data: {
    labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    datasets: [{
        label: "Target Rate",
        type: "line",
        borderColor: "#fd7e14",
        data: [100,100,100,100,100,100,100,100,100,100,100,100],
        fill: false
      }, {
        label: "Total Collection",
        type: "line",
        borderColor: "#dc3545",
        data: [56,61,81,56,87,100,120,78,75,69,81,99],
        fill: false,
        lineTension: 0
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
      text: 'Collection Rate Statistics of 2019'
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

//subcollectionrate - Chart
new Chart(document.getElementById("subcollection-chart"), {
  type: 'line',
  data: {
    labels: ["1-Apr","2-Apr","3-Apr","4-Apr","5-Apr","6-Apr","7-Apr","8-Apr","9-Apr","10-Apr"],
    datasets: [{ 
        data: [100,100,100,100,100,100,100,100,100,100,100],
        label: "Target Rate",
        borderColor: "#fd7e14",
        fill: false
      }, { 
        data: [100,99,102,80,120,130,110,101,99,97],
        label: "Collection Rate",
        borderColor: "#dc3545",
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
      text: 'Collection Rate Statistics of April 2019'
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