var current_country = "Sweden";

function printCountry(d, i) {

  var country = d.properties.name;
  console.log("You clicked: ", country);
  document.getElementById("click-feature").innerHTML = country;

  var path1 = "data/95/" + country + ".json";
  var path2 = "data/00/" + country + ".json";
  var path3 = "data/05/" + country + ".json";
  var path4 = "data/10/" + country + ".json";

  d3.json("/data/happiness95.json", function(data) {
    for (var key in data) {
        if (data[key].Country == country) {
            console.log(data[key]);
        }
    }
  });

  //////////////////////////////////////////////////////////////
  //////////////////////// Set-Up //////////////////////////////
  //////////////////////////////////////////////////////////////

  var margin = {top: 50, right: 100, bottom: 50, left: 50},
    width = Math.min(350, window.innerWidth - 10) - margin.left - margin.right,
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

  //Load the data and Call function to draw the Radar chart
  d3.json(path1, function(error, data){
    RadarChart(".radarChart1", data, radarChartOptions);
  });
  d3.json(path2, function(error, data){
    RadarChart(".radarChart2", data, radarChartOptions);
  });
  d3.json(path3, function(error, data){
    RadarChart(".radarChart3", data, radarChartOptions);
  });
  d3.json(path4, function(error, data){
    RadarChart(".radarChart4", data, radarChartOptions);
  });

}
