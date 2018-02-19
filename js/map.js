d3.select(window).on("resize", throttle);
var curr_wave = '95';

function setWave(wave) {
  curr_wave = wave;
  throttle();
}

var zoom = d3.behavior.zoom()
  .scaleExtent([1, 9])
  .on("zoom", move);


var width = document.getElementById('container').offsetWidth;
var height = width / 2;

var topo,projection,path,svg,g;

var graticule = d3.geo.graticule();

var tooltip = d3.select("#container").append("div").attr("class", "tooltip hidden");

setup(width,height);

function setup(width,height){
projection = d3.geo.mercator()
  .translate([(width/2), (height/2)])
  .scale( width / 2 / Math.PI);

path = d3.geo.path().projection(projection);

svg = d3.select("#container").append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(zoom)
    .on("click", click)
    .append("g");

g = svg.append("g");

}

d3.json("data/world-topo-min.json", function(error, world) {

var countries = topojson.feature(world, world.objects.countries).features;

topo = countries;
draw(topo);

});

function draw(topo) {

svg.append("path")
   .datum(graticule)
   .attr("class", "graticule")
   .attr("d", path);


g.append("path")
 .datum({type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]]})
 .attr("class", "equator")
 .attr("d", path);


var country = g.selectAll(".country").data(topo);
var countries = ['Pakistan', 'Estonia', 'Kazakhstan', 'Tunisia', 'Puerto Rico', 'Moldova', 'Bulgaria', 'Palestine', 'Macedonia', 'Lebanon', 'Zimbabwe', 'Norway', 'Indonesia', 'Total', 'Serbia', 'Brazil', 'Iraq', 'Finland',
  'Haiti', 'Latvia', 'Ghana', 'Iran', 'India', 'Ukraine', 'Ethiopia', 'South Korea', 'Peru', 'El Salvador', 'Trinidad and Tobago', 'Netherlands', 'Italy', 'Burkina Faso', 'Germany', 'Lithuania', 'Slovenia', 'Philippines',
  'Jordan', 'Slovakia', 'China', 'Bosnia Herzegovina', 'Poland', 'Algeria', 'France', 'Australia', 'Taiwan', 'Kyrgyzstan', 'Japan', 'United States', 'Sweden', 'Turkey', 'Egypt', 'Andorra', 'Mexico', 'Bosnia', 'Libya', 'Uganda',
  'Kuwait', 'United Kingdom', 'Uzbekistan', 'Guatemala', 'Hungary', 'Russia', 'Chile', 'Bangladesh', 'Azerbaijan', 'Georgia', 'Montenegro', 'Venezuela', 'Cyprus', 'Thailand', 'Tanzania', 'Hong Kong', 'Singapore', 'Malaysia',
  'Zambia', 'Nigeria', 'Saudi Arabia', 'Viet Nam', 'Mali', 'South Africa', 'Qatar', 'Ecuador', 'Spain', 'Serbia and Montenegro', 'Canada', 'Rwanda', 'Yemen', 'Argentina', 'Czech Rep.', 'Romania', 'Dominican Rep.', 'Armenia', 'Albania',
  'Switzerland', 'Colombia', 'Belarus', 'Uruguay', 'Croatia', 'Morocco', 'New Zealand']

country.enter().insert("path")
    .attr("class", "country")
    .attr("d", path)
    .attr("id", function(d,i) { return d.id; })
    .attr("title", function(d,i) { return d.properties.name; })
    .style("fill", function(d, i) {
      if (countries.includes(d.properties.name)) {
        var wave = curr_wave;
        var country = d.properties.name;
        var path = 'data/' + wave + '/' + d.properties.name + '.json';
        var h_value = getHappiness(path);
        if (h_value == null) {
          return "#aaaaaa";
        }
        // console.log("H-value: ", h_value);
        // console.log("Color: ", color);
        return hslToHex(216, 100, h_value*100);
      } else {
        return "#aaaaaa";
      }
    });

//offsets for tooltips
var offsetL = document.getElementById('container').offsetLeft+20;
var offsetT = document.getElementById('container').offsetTop+10;

country
  .on("click", function(d, i) {
    printCountry(d, i);
  });

//tooltips
country
  .on("mousemove", function(d,i) {

    var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );

    tooltip.classed("hidden", false)
           .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
           .html(d.properties.name);

    })
    .on("mouseout",  function(d,i) {
      tooltip.classed("hidden", true);
    });


//EXAMPLE: adding some capitals from external CSV file
d3.csv("data/country-capitals.csv", function(err, capitals) {

  capitals.forEach(function(i){
    addpoint(i.CapitalLongitude, i.CapitalLatitude, i.CapitalName );
  });

});

}

function hslToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = x => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function getHappiness(path){
    var result = null;
    $.ajax({
        async: false,
        url: path,
        dataType: "json",
        success: function(data){
            result = data;
        }
    });
    try {
      return result[0].values[0].value;
    } catch(err) {
      return null;
    }
}

function redraw() {
width = document.getElementById('container').offsetWidth;
height = width / 2;
d3.select('svg').remove();
setup(width,height);
draw(topo);
}


function move() {

var t = d3.event.translate;
var s = d3.event.scale;
zscale = s;
var h = height/4;


t[0] = Math.min(
  (width/height)  * (s - 1),
  Math.max( width * (1 - s), t[0] )
);

t[1] = Math.min(
  h * (s - 1) + h * s,
  Math.max(height  * (1 - s) - h * s, t[1])
);

zoom.translate(t);
g.attr("transform", "translate(" + t + ")scale(" + s + ")");

//adjust the country hover stroke width based on zoom level
d3.selectAll(".country").style("stroke-width", 1.5 / s);

}



var throttleTimer;
function throttle() {
window.clearTimeout(throttleTimer);
  throttleTimer = window.setTimeout(function() {
    redraw();
  }, 200);
}


//geo translation on mouse click in map
function click() {
var latlon = projection.invert(d3.mouse(this));
console.log(latlon);
}


//function to add points and text to the map (used in plotting capitals)
function addpoint(lat,lon,text) {

var gpoint = g.append("g").attr("class", "gpoint");
var x = projection([lat,lon])[0];
var y = projection([lat,lon])[1];

gpoint.append("svg:circle")
      .attr("cx", x)
      .attr("cy", y)
      .attr("class","point")
      .attr("r", 1.5);

//conditional in case a point has no associated text
if(text.length>0){

  gpoint.append("text")
        .attr("x", x+2)
        .attr("y", y+2)
        .attr("class","text")
        .text(text);
}

}
