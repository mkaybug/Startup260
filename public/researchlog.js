// Displays the current value of treeName in the output field.
if (localStorage.getItem("userTreeName") !== null) {
    document.getElementById("output").innerHTML = displayTreeName(localStorage.getItem("userTreeName"));
}
else {
    document.getElementById("output").innerHTML = displayTreeName("");
}

// Listener -> listens for enter key in "treeName" field and updates the value of userTreeName accordingly.
document.getElementById("tree-name").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        localStorage.setItem("userTreeName", this.value);
    }
});

function displayTreeName(treeName) {
    return treeName + " Family Tree";
}

// Row class, I need row objects in multiple places, it made more sense
// to create a class.
class Row {
    constructor(time, date, name, goal, location, citation, results) {
        this.time = time;
        this.date = date;
        this.name = name;
        this.goal = goal;
        this.location = location;
        this.citation = citation;
        this.results = results;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    postTable();
    console.log("Activated event listener")
});

// When website loads -> calls postRow recursively for table list
async function postTable() {      // Should I save the list on the server and pass it in?
    // So, I think the problem here is we're trying to get a table object, but it's not
    // transferring properly. Would it be easier to just pass rows?
    index = 0;

    // while (getTable()) {
    //     let tableRows = getTable();
    //     console.log("Table Data:")
    //     console.log
    // }

    tableRows = getTable();
    console.log("getTable()")
    console.log(getTable());
    // The output says that the type return of getTable() is an object.
    console.log(typeof getTable());
    
    if (tableRows.length > 0) {
        tableRows.forEach(row => {
            console.log("Frontend:")
            console.log(row);
            postRow(row);
        });
    }
}

async function getTable() {
    console.log("getting table")
    const response = await fetch('/api/table', {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Network response was not ok.')
    }

    const data = await response.json();
    console.log("Data:")
    console.log(data);
    console.log(typeof data)
    return data;
}

// Creates a row and pushes it onto table list -> calls postRow() which posts the row to the website
function addEntry() {
    // Get input values
    let time = document.getElementById('time').value;
    let date = document.getElementById('date').value;
    let name = document.getElementById('name').value;
    let goal = document.getElementById('search-goal').value;
    let location = document.getElementById('search-location').value;
    let citation = document.getElementById('citation').value;
    let results = document.getElementById('search-results').value;

    let row = new Row(time, date, name, goal, location, citation, results);
    addRow(row);
    // Call: row.<name of object> i.e. row.time

    postRow(row);

    // button.style.backgroundColor = "#01A491";
}

// Posts row on the website
async function postRow(row) {
    // Get the html table
    // 0 = the first table
    let table = document.getElementsByTagName('table')[0];

    // Add new empty row to the table
    // 0 = in the top (above the header) 1 is after the header
    // table.rows.length = at the end of the table
    let newRow = table.insertRow(1);

    // Add cells to the row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    let cell8 = newRow.insertCell(7);

    // Add values to the cells
    cell1.innerHTML = "";
    cell1.style.backgroundColor = "#FF5757";
    cell2.innerHTML = row.time;
    cell3.innerHTML = row.date;
    cell4.innerHTML = row.name;
    cell5.innerHTML = row.goal;
    cell6.innerHTML = row.location;
    cell7.innerHTML = row.citation;
    cell8.innerHTML = row.results;
}

async function addRow(row) {
    const response = await fetch('/api/row', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(row),
    });
}

// Questions for TAs
// 1. How to save table to local storage?
// 2. How to make table responsive to shrinking window?
// 3. Logins