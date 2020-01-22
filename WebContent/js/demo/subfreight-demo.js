//subfreight - Chart
new Chart(document.getElementById("subfreight-chart"), {
  type: 'line',
  data: {
    labels: ["1-Jan","2-Jan","3-Jan","4-Jan","5-Jan","6-Jan","7-Jan","8-Jan","9-Jan","10-Jan","11-Jan","12-Jan","13-Jan","14-Jan","15-Jan","16-Jan","17-Jan"],
    datasets: [{ 
      data: [1365,1235,1895,2513,798,542,2354,3254,1985,1357,985,2140,1789,1989,2542,1780,805],
      label: "Parts",
        borderColor: "#dc3545",
        lineTension: 0,
        fill: false
      }, { 
        data: [1695,354,1237,541,653,256,418,656,964,555,235,841,398,1098,599,469,678],
        label: "Products",
        borderColor: "#fd7e14",
        lineTension: 0,
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Total Freight of January 2019'
    },
    ticks: {
      callback: function(value, index, values) {
            return '$' + value;
      },  
    },
	legend: { display: true }
  }
});
