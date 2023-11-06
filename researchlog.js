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


// Takes Rent and percentage and on click adds a new row to the table.
function addEntry() {
    // Get input values
    let time = document.getElementById('time').value;
    let date = document.getElementById('date').value;
    let name = document.getElementById('name').value;
    let goal = document.getElementById('search-goal').value;
    let location = document.getElementById('search-location').value;
    let citation = document.getElementById('citation').value;
    let results = document.getElementById('search-results').value;

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
    cell2.innerHTML = time;
    cell3.innerHTML = date;
    cell4.innerHTML = name;
    cell5.innerHTML = goal;
    cell6.innerHTML = location;
    cell7.innerHTML = citation;
    cell8.innerHTML = results;

    // button.style.backgroundColor = "#01A491";
}


// Questions for TAs
// 1. How to save table to local storage?
// 2. How to make table responsive to shrinking window?
// 3. Logins