//Customer Satisfaction2 - Chart
new Chart(document.getElementById("customersatisfaction2-chart"), {
type: 'bar',
    data: {
      labels: ["1st Div", "2nd Div", "3rd Div", "4th Div", "5th Div", "6th Div", "7th Div"],
      datasets: [{
          label: "Achievement",
          type: "bar",
          backgroundColor: ["rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "#dc3545", "rgba(31, 135, 255, 1)"], 
          data: [4146,4326,4953,5000,8373,798,4065],
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
        fontSize: 14,
        text: 'Overall Customer Satisfaction of 2019'
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

//subsatisfaction - Chart
new Chart(document.getElementById("subsatisfaction-chart"), {
  type: 'bar',
  data: {
    labels: ["Admin Services Dept", "Domestic", "Ford 1 MFG", "Ford 2 MFG", "GA"],
    datasets: [{
        label: "Acheived",
        type: "bar",
        backgroundColor: ["rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "rgba(31, 135, 255, 1)", "#dc3545"], 
        data: [1245,1140,695,814,252],
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
      fontSize: 14,
      text: 'Customer Satisfaction - 1st Division'
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
