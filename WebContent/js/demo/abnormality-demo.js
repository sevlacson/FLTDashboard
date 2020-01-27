//Abnormality - Chart
new Chart(document.getElementById("abnormality-chart"), {
  type: 'bar',
  data: {
    labels: ["1st Div", "2nd Div", "3rd Div", "4th Div", "5th Div", "6th Div", "7th Div"],
    datasets: [{
        label: "Achievement",
        type: "bar",
        backgroundColor: ["rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "#dc3545", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)"], 
        data: [64,59,58,61,56,65,60],
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
      text: 'Overall Abnormality of 2019'
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


//Abnormality - Chart
new Chart(document.getElementById("abnormality1-chart"), {
  type: 'line',
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{ 
        data: [5,4,6,8,7,4,9,6,6,1,2,6],
        label: "1st Division",
        borderColor: "#dc3545",
        fill: false,
        lineTension: 0 
      }, { 
        data: [4,6,1,2,9,5,6,6,8,1,8,3],
        label: "2nd Division",
        borderColor: "#fd7e14",
        fill: false,
        lineTension: 0
      }, { 
        data: [2,6,4,8,9,6,4,7,2,7,2,1],
        label: "3rd Division",
        borderColor: "#ffc107",
        fill: false,
        lineTension: 0
      }, { 
        data: [6,8,6,9,7,4,1,2,5,5,5,3],
        label: "4th Division",
        borderColor: "#28a745",
        fill: false,
        lineTension: 0
      }, { 
        data: [3,2,1,4,5,6,9,8,7,5,4,2],
        label: "5th Division",
        borderColor: "#007bff",
        fill: false,
        lineTension: 0
      }, { 
        data: [1,3,2,5,4,7,8,5,6,9,8,7],
        label: "6th Division",
        borderColor: "#17a2b8",
        fill: false,
        lineTension: 0
      }, { 
        data: [4,8,9,5,4,8,5,6,3,2,4,2],
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
      text: 'Overall Abnormality of 2019'
    },
	legend: { display: true }
  }
});


//Abnormality2 - Chart
new Chart(document.getElementById("abnormality2-chart"), {
  type: 'bar',
  data: {
    labels: ["Admin Services Dept", "Domestic", "Ford 1 MFG", "Ford 2 MFG", "GA"],
    datasets: [{
        label: "Achievement",
        type: "bar",
        backgroundColor: ["rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "#dc3545"], 
        data: [10,11,12,13,7],
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
      text: 'Overall Abnormality of 1st Division'
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