var current_print = "1";

function changePrint(i) {
  current_print = i.toString();
}

function printCountry(d, i) {
  if (current_print == "1") {
    printCountry1(d, i);
  }
  if (current_print == "2") {
    printCountry2(d, i);
  }
  if (current_print == "3") {
    printCountry3(d, i);
  }
}

function printCountry1(d, i) {
  var country = d.properties.name;
  console.log("You clicked: ", country);
  document.getElementById("click-feature-1").innerHTML = country;

  var path1 = "data/95/" + country + ".json";
  var path2 = "data/00/" + country + ".json";
  var path3 = "data/05/" + country + ".json";
  var path4 = "data/10/" + country + ".json";

  //////////////////////////////////////////////////////////////
  //////////////////////// Set-Up //////////////////////////////
  //////////////////////////////////////////////////////////////

  var margin = {top: 50, right: 100, bottom: 50, left: 50},
    width = Math.min(300, window.innerWidth - 10) - margin.left - margin.right,
    height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

  //////////////////////////////////////////////////////////////
  //////////////////// Draw the Chart //////////////////////////
  //////////////////////////////////////////////////////////////

  var color = d3.scale.ordinal()
    .range(["#EDC951","#CC333F","#00A0B0"]);

  var radarChartOptions = {
    w: width,
    h: height,
    margin: margin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: color
  };

  //Load the data and Call function to draw the Radar charts
  d3.json(path1, function(error, data){
    try {
      RadarChart(".radarChart1-1", data, radarChartOptions);
      document.getElementById("radarChart1-1").innerHTML = "";
    }
    catch(err) {
      document.getElementById("radarChart1-1").innerHTML = "No data collected";
    }
  });

  d3.json(path2, function(error, data){
    try {
      RadarChart(".radarChart2-1", data, radarChartOptions);
      document.getElementById("radarChart2-1").innerHTML = "";
    }
    catch(err) {
      document.getElementById("radarChart2-1").innerHTML = "No data collected";
    }
  });
  d3.json(path3, function(error, data){
    try {
      RadarChart(".radarChart3-1", data, radarChartOptions);
      document.getElementById("radarChart3-1").innerHTML = "";
    }
    catch(err) {
      document.getElementById("radarChart3-1").innerHTML = "No data collected";
    }
  });
  d3.json(path4, function(error, data){
    try {
      RadarChart(".radarChart4-1", data, radarChartOptions);
      document.getElementById("radarChart4-1").innerHTML = "";
    }
    catch(err) {
      document.getElementById("radarChart4-1").innerHTML = "No data collected";
    }
  });
}

function printCountry2(d, i) {
  var country = d.properties.name;
  console.log("You clicked: ", country);
  document.getElementById("click-feature-2").innerHTML = country;

  var path1 = "data/95/" + country + ".json";
  var path2 = "data/00/" + country + ".json";
  var path3 = "data/05/" + country + ".json";
  var path4 = "data/10/" + country + ".json";

  //////////////////////////////////////////////////////////////
  //////////////////////// Set-Up //////////////////////////////
  //////////////////////////////////////////////////////////////

  var margin = {top: 50, right: 100, bottom: 50, left: 50},
    width = Math.min(300, window.innerWidth - 10) - margin.left - margin.right,
    height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

  //////////////////////////////////////////////////////////////
  //////////////////// Draw the Chart //////////////////////////
  //////////////////////////////////////////////////////////////

  var color = d3.scale.ordinal()
    .range(["#EDC951","#CC333F","#00A0B0"]);

  var radarChartOptions = {
    w: width,
    h: height,
    margin: margin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: color
  };

  //Load the data and Call function to draw the Radar charts
  d3.json(path1, function(error, data){
    try {
      RadarChart(".radarChart1-2", data, radarChartOptions);
      document.getElementById("radarChart1-2").innerHTML = "";
    }
    catch(err) {
      document.getElementById("radarChart1-2").innerHTML = "No data collected";
    }
  });

  d3.json(path2, function(error, data){
    try {
      RadarChart(".radarChart2-2", data, radarChartOptions);
      document.getElementById("radarChart2-2").innerHTML = "";
    }
    catch(err) {
      document.getElementById("radarChart2-2").innerHTML = "No data collected";
    }
  });
  d3.json(path3, function(error, data){
    try {
      RadarChart(".radarChart3-2", data, radarChartOptions);
      document.getElementById("radarChart3-2").innerHTML = "";
    }
    catch(err) {
      document.getElementById("radarChart3-2").innerHTML = "No data collected";
    }
  });
  d3.json(path4, function(error, data){
    try {
      RadarChart(".radarChart4-2", data, radarChartOptions);
      document.getElementById("radarChart4-2").innerHTML = "";
    }
    catch(err) {
      document.getElementById("radarChart4-2").innerHTML = "No data collected";
    }
  });
}

function printCountry3(d, i) {
  var country = d.properties.name;
  console.log("You clicked: ", country);
  document.getElementById("click-feature-3").innerHTML = country;

  var path1 = "data/95/" + country + ".json";
  var path2 = "data/00/" + country + ".json";
  var path3 = "data/05/" + country + ".json";
  var path4 = "data/10/" + country + ".json";

  //////////////////////////////////////////////////////////////
  //////////////////////// Set-Up //////////////////////////////
  //////////////////////////////////////////////////////////////

  var margin = {top: 50, right: 100, bottom: 50, left: 50},
    width = Math.min(300, window.innerWidth - 10) - margin.left - margin.right,
    height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

  //////////////////////////////////////////////////////////////
  //////////////////// Draw the Chart //////////////////////////
  //////////////////////////////////////////////////////////////

  var color = d3.scale.ordinal()
    .range(["#EDC951","#CC333F","#00A0B0"]);

  var radarChartOptions = {
    w: width,
    h: height,
    margin: margin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: color
  };

  //Load the data and Call function to draw the Radar charts
  d3.json(path1, function(error, data){
    try {
      RadarChart(".radarChart1-3", data, radarChartOptions);
      document.getElementById("radarChart1-3").innerHTML = "";
    }
    catch(err) {
      document.getElementById("radarChart1-3").innerHTML = "No data collected";
    }
  });

  d3.json(path2, function(error, data){
    try {
      RadarChart(".radarChart2-3", data, radarChartOptions);
      document.getElementById("radarChart2-3").innerHTML = "";
    }
    catch(err) {
      document.getElementById("radarChart2-3").innerHTML = "No data collected";
    }
  });
  d3.json(path3, function(error, data){
    try {
      RadarChart(".radarChart3-3", data, radarChartOptions);
      document.getElementById("radarChart3-3").innerHTML = "";
    }
    catch(err) {
      document.getElementById("radarChart3-3").innerHTML = "No data collected";
    }
  });
  d3.json(path4, function(error, data){
    try {
      RadarChart(".radarChart4-3", data, radarChartOptions);
      document.getElementById("radarChart4-3").innerHTML = "";
    }
    catch(err) {
      document.getElementById("radarChart4-3").innerHTML = "No data collected";
    }
  });
}
