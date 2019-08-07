window.onload = function (){
    d3.text("./data/data.csv", function(data) {
        var parsedCSV = d3.csv.parseRows(data);
        var container = d3.select("tbody")
            .selectAll("tr")
            .data(parsedCSV).enter()
            .append("tr")
                    
            .selectAll("td")
                .data(function(d) { return d; }).enter()
                .append("td")
                .text(function(d) { return d; });
    });
}












function ClickEvents() {
    let table = document.getElementById("table");
    
    
}

let add = document.getElementById("add");
