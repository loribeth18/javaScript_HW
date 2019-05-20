// from data.js
var tableData = data;


var tbody = d3.select("tbody");
console.log(tableData);

//Step 1: Loop Through `data` and console.log each report object
tableData.forEach(function(ufodata) {
    console.log(ufodata);
    //var row = tbody.append("tr");
    trow = tbody.append("tr");
    Object.entries(ufodata).forEach(function([key,value]) {
    var cell = trow.append("td")
    cell.text(value);
        })
});


// //listen to clicking buttons
var filterbutton = d3.select("#filter-btn")

filterbutton.on("click",function(){
    console.log("clicked");
    d3.event.preventDefault();

    var datetinput = d3.select("#datetime")
    var datefilter = datetinput.node().value;

    var ufofilterdate = tableData.filter(row => row.datetime === datefilter);//.filter(row => row.city==="cedar rapids");

    tbody.html("");
    
    //Step 1: Loop Through `data` and console.log each report object
    ufofilterdate.forEach(function(ufodata) {
        console.log(ufodata);
        //var row = tbody.append("tr");
        trow = tbody.append("tr");
        Object.entries(ufodata).forEach(function([key,value]) {
        var cell = trow.append("td")
        cell.text(value);
        });
    });
});
