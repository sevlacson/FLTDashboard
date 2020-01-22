//Efficiency - Chart
new Chart(document.getElementById("efficiency2-chart"), {
  type: 'line',
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{ 
        data: [101,100,104,100,99,100,98,100,100,101,103,102],
        label: "1st Division",
        borderColor: "#dc3545",
        fill: false,
        lineTension: 0
      }, { 
        data: [78,79,77,80,77,73,64,69,63,75,77,80],
        label: "2nd Division",
        borderColor: "#fd7e14",
        fill: false,
        lineTension: 0
      }, { 
        data: [112,113,113,111,109,105,108,105,105,105,105,105],
        label: "3rd Division",
        borderColor: "#ffc107",
        fill: false,
        lineTension: 0
      }, { 
        data: [89,88,81,89,89,90,87,88,84,85,89,84],
        label: "4th Division",
        borderColor: "#28a745",
        fill: false,
        lineTension: 0
      }, { 
        data: [79,77,80,81,89,89,109,105,108,69,63,77],
        label: "5th Division",
        borderColor: "#007bff",
        fill: false,
        lineTension: 0
      }, { 
        data: [112,113,113,111,109,105,108,105,104,100,99,100],
        label: "6th Division",
        borderColor: "#17a2b8",
        fill: false,
        lineTension: 0
      }, { 
        data: [89,90,87,113,113,79,77,80,77,80,77,69],
        label: "7th Division",
        borderColor: "#6610f2",
        fill: false,
        lineTension: 0
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Total Line of Efficiency for 2019'
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

