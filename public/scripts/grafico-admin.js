// Grafico relacionado com a section admin, main page our "index.js"
// google.charts.load("current", {packages:['corechart']});
// google.charts.setOnLoadCallback(drawChart);
// function drawChart() {
//   var data = google.visualization.arrayToDataTable([
//     ["Element", "Density", { role: "style" } ],
//     ["Copper", 8.94, "#b87333"],
//     ["Silver", 10.49, "silver"],
//     ["Gold", 19.30, "gold"],
//     ["Platinum", 21.45, "color: #e5e4e2"]
//   ]);

//   var view = new google.visualization.DataView(data);
//   view.setColumns([0, 1,
//                    { calc: "stringify",
//                      sourceColumn: 1,
//                      type: "string",
//                      role: "annotation" },
//                    2]);

//   var options = {
//     title: "Density of Precious Metals, in g/cm^3",
//     width: 600,
//     height: 400,
//     bar: {groupWidth: "95%"},
//     legend: { position: "none" },
//   };
//   var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
//   chart.draw(view, options);
// }

// google.charts.load("current", { packages: ["bar"] });
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {
//   var data = google.visualization.arrayToDataTable([
//     ["Year", "Sales", "Expenses", "Profit"],
//     ["2014", 1000, 400, 200],
//     ["2015", 1170, 460, 250],
//     ["2016", 660, 1120, 300],
//     ["2017", 1030, 540, 350],
//   ]);

//   var options = {
//     chart: {
//       title: "Company Performance",
//       subtitle: "Sales, Expenses, and Profit: 2014-2017",
//     },
//   };

//   var chart = new google.charts.Bar(
//     document.getElementById("columnchart_values")
//   );

//   chart.draw(data, google.charts.Bar.convertOptions(options));
// }

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    [
      "Month",
      "Bolivia",
      "Ecuador",
      "Madagascar",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ]);

  var options = {
    title: "Monthly Coffee Production by Country",
    vAxis: { title: "Cups" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("columnchart_values")
  );
  chart.draw(data, options);
}
