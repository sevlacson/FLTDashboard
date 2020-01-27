//Claim - Chart
new Chart(document.getElementById("claim1-chart"), {
  type: 'bar',
  data: {
    labels: ["Customer", "Receiving", "Ads", "Sample", "ISIR", "YI/QI"],
    datasets: [{
        label: "Total Claim",
        type: "bar",
        backgroundColor: ["rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "#dc3545"],
        data: [120,48,60,72,36,24],
        datalabels: {
          // display labels for this specific dataset
          display: true,
          color: '#fff'
        },
      },
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Total Claim of 2019'
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

//claim2 - Chart
new Chart(document.getElementById("claim2-chart"), {
  type: 'line',
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{ 
        data: [23,25,19,20,21,24,26,25,22,24,23,30],
        label: "Total Claim",
        borderColor: "#dc3545",
        lineTension: 0,
        datalabels: {
          // display labels for this specific dataset
          display: false,
        },
        fill: false
      }]
  },
  options: {
    title: {
      display: true,
      text: 'Total Claim of 2019'
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