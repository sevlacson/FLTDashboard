//5Why1 - Chart
new Chart(document.getElementById("5why1-chart"), {
  type: 'bar',
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{ 
        data: [1,3,5,8,11,14,17,20,23,26,29,32],
        label: "No 5Why",
        backgroundColor: "rgba(31, 135, 255, 1)",
        fill: false
      }, { 
        data: [3,5,7,10,13,16,19,22,25,28,31,34],
        label: "With 5Why",
        backgroundColor: "rgba(253, 162, 43, 1)",
        fill: false
      }, { 
        data: [5,7,10,13,16,19,22,25,28,31,34,37],
        label: "Approved",
        backgroundColor: "rgba(150, 150, 150, 1)",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: '5 Why of 2019'
    },
	legend: { display: true }
  }
});

//sub5why - Chart
new Chart(document.getElementById("sub5why-chart"), {
  type: 'line',
  data: {
    labels: ["1-Jan","2-Jan","3-Jan","4-Jan","5-Jan"],
    datasets: [{ 
        data: [2,1,3,0,3],
        label: "No 5 Why",
        borderColor: "#dc3545",
        fill: false,
        lineTension: 0
      }, { 
        data: [0,1,3,1,2],
        label: "With 5 Why",
        borderColor: "#fd7e14",
        fill: false,
        lineTension: 0
      }, { 
        data: [1,1,2,0,1],
        label: "Approved",
        borderColor: "#ffc107",
        fill: false,
        lineTension: 0
      }
    ]
  },
options: {
  title: {
    display: true,
    text: '5 Why of January 2019'
  },
scales: {
},
  legend: { display: true }
}
});


//5Why - Chart
new Chart(document.getElementById("5why-chart"), {
  type: 'bar',
  data: {
    labels: ["No 5Why", "With 5Why", "Approved"],
    datasets: [{
        label: "Target",
        type: "line",
        borderColor: "#fd7e14",
        data: [5,5,5],
        fill: false
      }, {
        label: "Number of Days",
        type: "bar",
        backgroundColor: ["#dc3545", "rgba(31, 135, 255, 1)", "#dc3545"],
        data: [3,6,4],
      },
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Overall Average 5 Why of 2019'
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
