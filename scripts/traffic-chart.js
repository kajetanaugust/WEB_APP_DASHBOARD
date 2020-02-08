new Chartist.Line('.traffic-container', {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-30", "4-10", "11-17", "18-24", "25-31"],
    series: [
      [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000 ]
    ]
  }, {
    high: 2000,
    low: 0,
    scaleMinSpace: 5,
    showArea: true,
    fullWidth: true
  });
