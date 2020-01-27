//Defects - Chart
new Chart(document.getElementById("defects1-chart"), {
  type: 'bar',
  data: {
    labels: ["1st Div", "2nd Div", "3rd Div", "4th Div", "5th Div", "6th Div", "7th Div"],
    datasets: [{
        label: "Total Functional Defects per no. of line",
        type: "bar",
        backgroundColor: ["rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "#dc3545", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)"],
        data: [18,14,15,12,10,19,17],
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
      text: 'Total Functional Defects Per No. of Line 2019'
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


//defects2 - Chart
new Chart(document.getElementById("defects2-chart"), {
  type: 'line',
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{ 
        data: [1,2,3,4,1,2,3,4,1,2,3,1],
        label: "1st Division",
        borderColor: "#dc3545",
        lineTension: 0,
        datalabels: {
          // display labels for this specific dataset
          display: true,
          color: '#fff'
        },
        fill: false
      }, { 
        data: [6,5,6,6,5,4,3,4,3,2,1,1],
        label: "2nd Division",
        borderColor: "#fd7e14",
        lineTension: 0,
        fill: false
      }, { 
        data: [1,2,3,4,5,6,7,6,4,4,3,5],
        label: "3rd Division",
        borderColor: "#ffc107",
        lineTension: 0,
        fill: false
      }, { 
        data: [2,2,3,4,3,4,3,6,5,4,5,6],
        label: "4th Division",
        borderColor: "#28a745",
        lineTension: 0,
        fill: false
      }, { 
        data: [3,4,5,6,5,3,5,4,3,4,5,3],
        label: "5th Division",
        borderColor: "#007bff",
        lineTension: 0,
        fill: false
      }, { 
        data: [4,6,5,4,7,6,3,5,5,5,4,3],
        label: "6th Division",
        borderColor: "#17a2b8",
        lineTension: 0,
        fill: false
      }, { 
        data: [3,5,4,5,5,6,4,5,6,2,6,4],
        label: "7th Division",
        borderColor: "#6610f2",
        lineTension: 0,
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Total Functional Defects Per No. of Line 2019'
    },
	legend: { display: true }
  }
});