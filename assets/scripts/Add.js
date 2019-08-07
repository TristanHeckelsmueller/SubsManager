function addRow()
{
    var intervall = document.getElementById('intervall').value;


    // get input values
    var name = document.getElementById('name').value;
    var start = document.getElementById('start').value;
    var runtime = document.getElementById('runtime').value;
    var cost = document.getElementById('cost').value;
    var reminder = document.getElementById('reminder').value;
      
      // get the html table
      // 0 = the first table
      var table = document.getElementsByTagName('table')[0];
      
      // add new empty row to the table
      // 0 = in the top 
      // table.rows.length = the end
      // table.rows.length/2+1 = the center
      var newRow = table.insertRow(table.rows.length/2+1);
      
      // add cells to the row
      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);
      var cel3 = newRow.insertCell(2);
      var cel4 = newRow.insertCell(3);
      var cel5 = newRow.insertCell(4);
      var cel6 = newRow.insertCell(5);
      // add values to the cells
      cel1.innerHTML = name;
      cel2.innerHTML = intervall;
      cel3.innerHTML = start;
      cel4.innerHTML = runtime;
      cel5.innerHTML = cost;
      cel6.innerHTML = reminder;
}
let addrow = document.getElementById("add-row");

addrow.addEventListener("click", addRow);
