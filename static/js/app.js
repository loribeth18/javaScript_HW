// from data.js
var tableData = data;


var tbody = d3.select("tbody");
console.log(tableData);

//Step 1: Loop Through `data` and console.log each report object
tableData.forEach(function(ufodata) {
    console.log(ufodata);
    //var row = tbody.append("tr");
    for (var i = 0; i < 12; i++) {
        trow = tbody.append("tr");
        Object.entries(ufodata).forEach(function([key,value]) {
        var cell = trow.append("td")
        cell.text(value);
        })
    };
});


// //listen to clicking buttons
var filterbutton = d3.select("#filter-btn")

filterbutton.on("click",function(){
    console.log("clicked")
    d3.event.preventDefault();
    var inputText = d3.event.target.value;
});


var datetofilter = d3.select("#datetime")

datetofilter.on("click", function() {
    console.log("clicked")
    d3.event.preventDefault();

    var datetinput = d3.select("#datetime")
    var datefilter = datetinput.node().value;
    
    ufofilter =datefilter.filter(ufodata)
        console.log(ufodata);
        Object.entries(datefilter).forEach(function([key,value]) {
            trow = tbody.append("tr");
            var cell = row.append("td")
            cell.text(value);
        }); 
});

