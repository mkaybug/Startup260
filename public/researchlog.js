// Event messages
const MessageExpire = 'gameEnd';
const GameStart = 'gameStart';
let socket;

// Waits for website to load/reload and calls postTable()
document.addEventListener('DOMContentLoaded', function() {
    postTable();
    configureWebSocket();
});

// Functionality for peer communication using WebSocket
function broadcastEvent(from, type, value) {
    console.log("creating JSON")
    const event = {
        from: from,
        type: type,
        value: value,
    };
    socket.send(JSON.stringify(event));
    console.log('Message sent: ', event)
}

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
      displayMsg('system', 'ResearchLog', 'connected');
    };
    socket.onmessage = async (event) => {
        console.log("Message received: ", event)
      const msg = JSON.parse(await event.data.text());
        if (msg.type === GameStart) {
            displayMsg('User: ', msg.from, `is researching`, );
        }
    };
    socket.onerror = (error) => {
        console.error('WebSocket error: ', error);
    };
}

const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
console.log('WebSocket URL:', `${protocol}://${window.location.host}/ws`);


function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#user-messages');
    chatText.innerHTML =
        `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
}

function getUserName() {
    return localStorage.getItem('userName') ?? 'Mystery user';
}

// Function to execute after five minutes
function executeAfterFiveMinutes() {
    broadcastEvent(getUserName(), MessageExpire, {});
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
        this.username = localStorage.getItem('userName');
    }
}

// When website DOMContentLoaded -> calls postRow recursively for table list
async function postTable() {
    let tableRows = await getTable();
    
    if (tableRows.length > 0) {
        tableRows.forEach(row => {
            if (row.username == localStorage.getItem('userName')) {
                postRow(row);
            }
        });
    }
}

// Gets table from the backend
async function getTable() {
    const response = await fetch('/api/table', {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Network response was not ok.')
    }

    const data = await response.json();
    return data;
}

// Creates a row and pushes it onto table list -> calls postRow() which posts the row to the website
function addEntry() {
    broadcastEvent(getUserName(), GameStart, {});
    // Set a timer for five minutes
    // setTimeout(() => executeAfterFiveMinutes(), 5 * 60 * 1000);

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
