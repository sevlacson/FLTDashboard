//subsubefficiency - Chart
new Chart(document.getElementById("efficiency5-chart"), {
  type: 'line',
  data: {
    labels: ["1-Jan","2-Jan","3-Jan","4-Jan","5-Jan","6-Jan","7-Jan","8-Jan","9-Jan","10-Jan","11-Jan","12-Jan","13-Jan","14-Jan"],
    datasets: [{ 
        data: [100,100,100,100,100,100,100,100,100,100,100,100,100,100],
        label: "Target Efficiency",
        borderColor: "#dc3545",
        fill: false
      }, { 
        data: [20,12,22,32,42,52,62,72,82,92,10,11,12,13],
        label: "Efficiency",
        borderColor: "#fd7e14",
        lineTension: 0,
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      fontSize: 14,
      text: 'No. of Daily Visitors'
    },
    ticks: {
      callback: function(value, index, values) {
            return value + '%';
      },  
},
	legend: { display: true }
  }
});
