var current_country = "Sweden";

function printCountry(d, i) {

  var country = d.properties.name;
  console.log("You clicked: ", country);
  document.getElementById("click-feature").innerHTML = country;

  d3.json("/data/happiness95.json", function(data) {
    for (var key in data) {
        if (data[key].Country == country) {
            console.log(data[key]);
        }
    }
  });

}
