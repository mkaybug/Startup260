// Changing button color when it is clicked
// const button = document.getElementById("color-changing-button")

// Displays the current value of userIncome in the output field.
document.getElementById("output").innerHTML = displayIncome(localStorage.getItem("userIncome"));

// Listener -> listens for enter key in "income" field and updates the value of userIncome accordingly.
document.getElementById("income").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        localStorage.setItem("userIncome", this.value);
    }
});

function displayIncome(incomeInput) {
    // Perhaps later we can add commas, but for now we're just going to concatenate "$"
    return "$" + incomeInput;
}


// Takes Rent and percentage and on click adds a new row to the table.
function addBudgetCategory() {
    // Get input values
    let categoryName = '';
    categoryName = document.getElementById('category-name').value;
    let percentage = '';
    percentage = document.getElementById('category-name').value;
    console.log(typeof percentage);

// TODO test categoryName and percentage input, do we ever get a null string?
    try {
        if (categoryName === null) {
            throw new Error("Must enter a category name.");
        }
        else if (percentage === null) {
            throw new Error("Must enter a budget percentage.");
        }
        // else if (typeof percentage !== 'number') {
        //     throw new Error("Percentage must be a number.");
        // }
        
        else {
            // Get the html table
            // 0 = the first table
            let table = document.getElementsByTagName('table')[0];

            // Add new empty row to the table
            // 0 = in the top (above the header) 1 is after the header
            // table.rows.length = at the end of the table
            let newRow = table.insertRow(table.rows.length);

            // Add cells to the row
            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            let cell3 = newRow.insertCell(2);
            let cell4 = newRow.insertCell(3);
            let cell5 = newRow.insertCell(4);

            // Add values to the cells
            cell1.innerHTML = "";
            cell2.innerHTML = categoryName;
            cell3.innerHTML = percentage + "%";
            cell4.innerHTML = 400; // calculateAvailableBudget();
            cell5.innerHTML = calculateCategoryBudget(percentage);
        }
    }
    catch (error) {
        alert("An error occurred: " + error.message);
    }
    // button.style.backgroundColor = "#01A491";
}

function calculateCategoryBudget(percentage) {

    let categoryPercentage = percentage;
    let income = localStorage.getItem("userIncome");
    let categoryBudget = (income / 100) * percentage;
            
    return categoryBudget;
    
}

// Takes Expense, Amount, and Budget Category and adds a new row to the table.
function addExpense() {

}

// On click, edit button (let's implement this last)
