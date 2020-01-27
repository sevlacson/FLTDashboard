//Inventory Turn - Chart
new Chart(document.getElementById("inventory-chart"), {
  type: 'line',
  data: {
    labels: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    datasets: [{ 
        data: [17,17,18,18,17,18,18,19,23,23,26,26],
        label: "Number of Days",
        borderColor: "#dc3545",
        lineTension: 0,
        datalabels: {
          // display labels for this specific dataset
          display: true,
        },
        fill: false
      }, { 
        data: [10,10,10,10,10,10,10,10,10,10,10,10],
        label: "Target",
        borderColor: "#fd7e14",
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
      text: 'Inventory Turn of 2019'
    },
    scales: {
      yAxes: [{
                                display: true,
                                ticks: {
                                    beginAtZero: true,     
                                }
                            }]
      },
	legend: { display: true }
  }
});

//subinventory - Chart
new Chart(document.getElementById("subinventory-chart"), {
  type: 'line',
  data: {
    labels: ["1-Jan","2-Jan","3-Jan","4-Jan","5-Jan","6-Jan","7-Jan","8-Jan","9-Jan","10-Jan"],
    datasets: [{ 
        data: [2,4,5,6,3,4,5,3,2,1],
        label: "Accomplishment",
        borderColor: "#dc3545",
        lineTension: 0,
        datalabels: {
          // display labels for this specific dataset
          display: true,
        },
        fill: false
      }]
  },
  options: {
    title: {
      display: true,
      text: 'Inventory Turn of January 2019'
    },
    scales: {
      yAxes: [{
            display: true,
            ticks: {
            beginAtZero: true,
    }
            }]
    },
          legend: { display: false }
        }
    });