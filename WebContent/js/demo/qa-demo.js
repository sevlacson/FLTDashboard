//qualityawareness - Chart
new Chart(document.getElementById("qa-chart"), {
  type: 'line',
  data: {
    labels: ["27-Nov","28-Nov","29-Nov","30-Nov","1-Dec","1-Dec","2-Dec","3-Dec","4-Dec","5-Dec","6-Dec","7-Dec","8-Dec","9-Dec","10-Dec","11-Dec","12-Dec"],
    datasets: [{ 
        data: [123,244,255,42,3,248,10,248,257,271,212,13,250,253,268,250],
        label: "Total",
        borderColor: "#dc3545",
        fill: false,
        lineTension: 0
      }, { 
        data: [100,200,230,20,1,235,10,229,237,251,203,11,229,238,246,152],
        label: "Supervisors",
        borderColor: "#fd7e14",
        fill: false,
        lineTension: 0
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'No. of Daily Visitors'
    },
	legend: { display: true }
  }
});
