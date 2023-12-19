## DNS and IP Addresses
When one device wants to talk to another it must have an IP address. For example, 128.187.16.184 is BYU's address. Usually, human users prefer a symbolic name over an IP address. The symbolic name is called a domain name. Domain names are converted to IP address by doing a lookup in the Domain Name System (DNS).
## Server
Key Pair file: Kaybugging.pem
### Remote Shell Into Server
```
-> ssh -i Kaybugging.pem ubuntu@18.210.220.50
```
The `Caddyfile` is the configuration file for your web service gateway. The `public_html` directory contains all of the static files that you are serving up directly through Caddy when using it as a web service. We will cover Caddy configuration in a later instruction. The `services` directory is the place where you are going to install all of your web services once you build them.

Need to exit?
```
-> exit
```
If warning that key pair file permissions are too open:
```
-> `chmod 600 Kaybugging.pem`
```
# Domain Names
You can get the IP address for any domain using the `dig` console utility.

amazon.com has more than one IP address associated with its domain name in case one isn't responding.

## Root Domain
Represented by a secondary level domain and a top level domain.

The owner of a root domain can create any number of subdomains. Ex. travel.cs260.click, finance.cs260.click, etc.
## Top Level Domain (TDL)
Represents things like com, edu, or click. A root domain would look like: byu.edu, google.com, cs260.click, etc.

The possible list of TLDs is controlled by ICANN, one of the governing boards of the internet.

# How to get info on Domain Names
`-> whois byu.edu
...`
You can look up the technical contact, who to contact with problems, or the admin contact if you want to buy.
## DNS (Domain Name System)

# Caddy
What does it mean when there's a little lock symbol in the upper right of the page next to the URL? -> the information travelling back and forth is encrypted.

Caddy was created by a student from BYU!
## A records and CNAME records
A domain name is used to create DNS records that map domain names to IP addresses (A records) or other domain names (CNAME records).

# HTML Introduction
Where is the interpreter for HTML? It's the browser! And, it's not too strict. Still, try to be clean and neat and accurate.
### (W3schools.com)
Proffessor Clement's favorite HTML learning tool.
## Tip
Start a portfolio for yourself, create a gitHub repository, perhaps even "buy your name" so that when an employer googles you, they get your website as the top hit.

# CSS
Use BootStrap! But not for this project (at first). Bootstrap is used by everybody, so your website will be familiar to your user.

Functionally, CSS is concerend with rulesets (rules). A rule is comprised of a `selector` that selects the elements to apply the rule to, and one or more `declarations` that represent the `property` to style with the given `property value`.

```css
p {
  font-family: sans-serif;
  font-size: 2em;
  color: navy;
  text-shadow: 3px 3px 1px #cccccc;
}
```

The selector `p` selects all paragraph elements in the HTML document. The four specified declarations then: 1) change the font to use a sans-serif font, 2) increase the font size to be twice as big as the default font, 3) change the text color to be navy, and 4) create a gray shadow for the text. The result looks like this.

## Associating HTML and CSS
There are three ways to associate HTML and CSS: 

1. Use `style` attribute of HTML to explicitly assign one or more declarations.

```html
<p style="color:green">CSS</p>
```

2. Use `style` attribute to define CSS rules within the HTML document. Should appear in the `head` element of the document so rules apply to the whole document.

```html
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>
```

3. Use HTML element `link` to reference external CSS file.

```html
<link rel="stylesheet" href="styles.css" />
```

**styles.css**

```css
p {
  color: green;
}
```

# JavaScript
*Here is a step through tutorial for JavaScript: https://htmlpreview.github.io/?https://github.com/webprogramming260/.github/blob/main/profile/javascript/introduction/jsDemo.html*
Always set your script at the end of the body. That way your website will render first, so your user can see something, and then the functionality will load in.

Learning JavaScript helps:
- W3 Tutorials
- Book: Eloquent JavaScript

JavaScript can be used for front end and back end (node.js is backend, implemented in the browser).

### Code samples:

Strings: `'Hello World';`

Print and concatenation: `console.log('Hello' + ' ' 'world')`

Array and function definition: 

```
const words = [;hello', 'world'];

words.forEach((word) => {
console.log(word);
});
```

You don't have to declare a function before you pass it an argument. We didn't specify the type for the variable "word" so JS will do it's best and take any type.

**Using an index file with HTML file**

index.js

```
function sayHello() {
  console.log('hello');
}
```

index.html

```
<head>
  <script src="index.js"></script>
</head>
<body>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <button onclick="let i=1; i++; console.log(i)">press me</button>
</body>
  </script>
</body>
```

JS can be in the HTML file or referenced in another file. If it's starting to get too long, put it in it's own file.

### Do most of your debugging in inspect inside of Chrome REALLY POWERFUL!!!

### Syntax
== Comparison operator, are they equal?

=== Comparison operator, are they equal, AND are they the same type?

### Template Literals
*You can insert code that executes and returns right in your string!*
```
`Template ${'lite' + 'rals'}! ${hello(name)}`);
```
Right click on webpage and click on "inspect"

# Midterm Study Guide
1. In the following code, what does the link element do?

> The <link> element is used to define relationships between a document and an external source. ie. bootstrap style sheets into an HTML file.

2. In the following code,  what does a div tag do?

> The <div> tag is used for grouping and organizing other HTML elements. It can be used to wrap multiple elements such as headings, paragraphs, images, and other HTML elements togehter. This is useful for applying common styling, layout, or behavior to a group of elements.

3. In the following code, what is the difference between the #title and .grid selector?

> #title -> example of an ID selector in CSS. Used to select an HTML element with a specific 'id' attribute. ID selectors are unique to one element on the page with specified 'id'. Used to apply specific stying or behavior to one element.
> .grid -> example of a class selector in CSS. Used to select HTML elements with specific 'class' attribute.

4. In the following code, what is the difference between padding and margin?

> Padding is the space inside an element, between the element's content and its border. Margins are the space outside an element, between the element's border and neighboring elements. 

5. Given this HTML and this CSS how will the images be displayed using flex?

> To use flexbox, you start by creating a flex container, which is an element that you want to lay out using the flexbox model. This can be any block-level or inline-block element.
> Main Axis and Cross Axis: In a flex container, there are two axes: the main axis and the cross axis. The main axis is determined by the 'flex-direction' property, which can be set to either "row" (default) or "column" to create a horizontal or vertical ayout, respectively.
> To control the layout of flex items, you can use various flex properties, such as 'flex-grow', 'flex-shrink', and 'flex-basis', to define how the space is distributed among the items.
  
6.  What does the following padding CSS do?

> Padding creates space inside an element, surrounding the content.
   
7. What does the following code using arrow syntax function declaration do?

> `() => 3;` A function that takes no parameters and always returns 3.
    
8. What does the following code using map with an array output?

> 
    
9. What does the following code output using getElementByID and addEventListener?

> 
    
10. What does the following line of Javascript do using a # selector?

> 
    
11. Which of the following are true? (mark all that are true about the DOM)

> The Document Object Model is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.
> 
> The browser provides access tot he DOM through a global variable name `document` that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name `document` you will see the DOM for the document the browser is currently rendering.
> 
> For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.
> 
> Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The DOM Element Interface provides the means for iterating child elements, accessing the parent element, and manipuating the element's attributes. From your JavaScript code, you can start with the `document` variable and walk through the every element in the tree.
> 
> You can provide a CSS selector to the `querySelectorAll` function in order to select elements from the document. The `textContent` property contains all of the element's text. You can even access a textual representation of an element's HTML content witht he `innerHTML` property.
> 
> Modifying the DOM -> The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.
> 
> To delete elements call the `removeChild` function on the parent element.
> 
> The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first div element in the DOM and replaces all the HTML it contains.
> 
> However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, moniter activity, and steal credentials.
> 
> Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using `innerHTML`.
> 
> Event Listeners -> All DOM elements support the ability to attach a function that gets called when an event occurs on the element -> event listeners. 

12. By default, the HTML span element has a default CSS display property value of:

> `inline` This means that the <span> element is treated as an inline-level element and it does not start a new line. It flows with the text or content alongside other inline elements.
   
13. How would you use CSS to change all the div elements to have a background color of red?

> What is the outermost `div` element? Set the background color of that one to red. Or, if you wanted all the `div` elements in a document to have a red background color, you could do this:
> ```
> div {
>   background color: red;
> }
> ```
   
14. How would you display an image with a hyperlink in HTML?

>```
> <a href="https://www.example.com">
>    <img src="example-image.jpg" alt="Example Image">
> </a>
>```
   
15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

> 1. Content: The actual content of the element, such as text, images, or other media.
> 2. Padding: Space between the content and the elements border.
> 3. Border: A visible or invisible boundary around the padding and content. You can set the border's style, color, and width.
> 4. Margin: Space outsidet he border. Space between element and other elements in the layout.
> ![Alt Text](https://www.simplilearn.com/ice9/free_resources_article_thumb/CSS-Box-Model.png)
   
16. Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?

> You can use specific ids
> ```
> #troubl {
>   color: green;
> }
> ```
> Or classes
> ```
> .troubl {
>   color: green;
> }
> ```
   
17. What will the following code output when executed using a for loop and console.log?
   
18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

> ```
> let element = document.getElementById("byu");
> element.style.color = "green";
> ```
   
19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

> Paragraph: `<p>`
>
> Ordered List: `<ol>`
>
> Unordered List: `<ul>`
>
> Second level heading: `<h2>`
>
> First level heading: `<h1>`
>
> Third level heading: `<h3>`
   
20. How do you declare the document type to be html?

> ```
> <!DOCTYPE html>
> <html lang="en">
> </html>
> ```
   
21. What is valid javascript syntax for if, else, for, while, switch statements?

>If Else:
>  ```
> if (a === 1) {
>   //...
> }
> else {
>   //...
> }
> ```
>
> Ternary operator: `a === 1 ? console.log(1) : console.log('not 1');`
>
> For Loop:
> ```
> for (let i = 0; i < 2; i++) {
>   console.log(i)
> }
> ```
>
> Do While Loop:
> ```
> let i = 0;
> do {
>   console.log(i);
>   i++;
> } while (i < 2);
> ```
>
> For in (iterates over an object's property names):
> ```
> const obj = { a: 1, b: 'fish' };
> for (const name in obj) {
>   console.log(name);
> }
> // OUTPUT: a
> // OUTPUT: b
> ```
>
> For of (iterates over an iterable's (Array, Map, Set, ...) property values):
> ```
> const arr = ['a', 'b'];
> for (const val of arr) {
>   console.log(val);
> }
> // OUTPUT: 'a'
> // OUTPUT: 'b'
> ```
>
> Break and continue: `continute;` `break;`
>
> Switch Statement:
> ```
> switch (day) {
>   case 0:
>     dayName = "Sunday";
>     break;
>   case 1:
>     dayName = "Monday";
>     break;
>   case 2:
>     dayName = "Tuesday";
>     break;
>   case 3:
>     dayName = "Wednesday";
>     break;
>   case 4:
>     dayName = "Thursday";
>     break;
>   case 5:
>     dayName = "Friday";
>     break;
>   case 6:
>     dayName = "Saturday";
>     break;
>   default:
>     dayName = "Invalid day"; // Default case, in case the day value is not 0-6
>   }
> ```
   
22. What is the correct syntax for creating a javascript object?

> ```
> const obj = new Object({a:3});
> obj['b'] = 'fish';
> obj.c = [1, 2, 3];
> obj.hello = function () {
>   console.log('hello');
> };
> 
>
> console.log(obj);
> // OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
> ```
>
> ```
> const obj = {
>   a: 3,
>   b: 'fish',
> };
> ```

23. Is is possible to add new properties to javascript objects?

> Yep! Once declared you can add properties to the object by simply referencing the property name in an assignment.
   
24. If you want to include JavaScript on an HTML page, which tag do you use?

> `<script>`
   
25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

> 
   
26. Which of the following correctly describes JSON?

> JSON "JavaScript Object Notation", provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This makes it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.
> 
> JSON is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. JSON is often used to transmit data between a server and a web application as an alternative to XML.
   
27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?

> `chmod`: "Change mode", used to change the permissions of files and directories. Allows you to control who can read, write, or execute a file or directory.
>
>  `pwd`: "Print working directory", shows you the full path to the directory you are currently in.
>
>  `cd`: "Change directory", changes the current directory.
>
>  `ls`: "list", lists the files and subdirectories in a current directory.
>
>  `vim`: launch the Vim editor.
>
>  `nano`: launch the Nano text editor.
>
>  `mkdir`: creates a new directory (folder).
>
>  `mv`: "move", allows you to change the location of a file or directory in the file system or to give a file or directory a new name.
>
>  `rm`: "remove", delete files and, with appropriate flags, entire directories and their contents.
>
>  `man`: "manuel", displays the manuel pages for various commands, programs, and system functions.
>
>  `ssh`: "secure shell", used to establish secure remote connections to another computer or server over a network. Provides encrypted communication for secure access to remote systems. Commonly used to log into remote servers, execute commands on remote machines, and securely transfer files between systems.
> 
> `ps`: "process status", provides a list of currently running processes on the system, along with their details
> 
> `wget`: "web get", retrieves files from the web using the HTTP, HTTPS, FTP, and FTPS protocols. Versatile and powerful tool for downloading files from the internet or local network.
> 
> `sudo`: "superuser do", used to execute a command with superuser or administrative privileges. Allows authorized users to perform tasks or run commands that require elevated privileges, such as system administration tasks, without needing to log in as the system's superuser (often called "root").
   
28. Which of the following console command creates a remote shell session?

> `ssh` "Secure Shell", `telnet`, or `rsh` "Remote Shell"
   
29. Which of the following is true when the -la parameter is specified for the ls console command?

> `ls -la` is used to list all files and directories including hidden files in a directory.
   
30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
  
> Browser talks to server. HTTPS ensures that we don't talk to the middle man who can steal   information. We talk to the server first because we want to know that the serve is legit, and then the server sends a certificate back. We can use that certificate to create an encryption key that can be used the rest of the session to secure data sent back and forth between browser and server.
   
31. When is a web certificate necessary to use HTTPS.

> Security.
> ![Alt Text](https://raw.githubusercontent.com/webprogramming260/.github/main/profile/webServers/https/letsencryptCertIssue.jpg)
   
32. Can a DNS A record point to an IP address or another A record.

> No, A records are used to map a domain name to an IPv4 address.
   
33. Port 443, 80, 22 is reserved for which protocol?

> 443: HTTPS (Hypertext Transfer Protocol Secure), used for encrypting web communications to ensure the confidentiality and integrity of data exchanged between a web server and client (e.g. a web browser). HTTPS is widely used to secure online transactions, login pages, and any web applications that require data privacy.
> 80: HTTP (Hypertext Transfer Protocol), standard port for regular, unencrypted web traffic using HTTP. Used for non-secure web communications.
> 22: Used for ssh, which is a secure protocol for remote login and secure command execution on remote servers.
   
34. What will the following code using Promises output when executed?

> ```
> const delayedFunction = (param1, param2) => {
>   return new Promise((resolve, reject) => {
>     setTimeout(() => {
>       const constantValue = 'Hello, World!'; // Replace with the desired constant value
>       resolve(constantValue);
>     }, 3000);
>   });
> };
> ```

> Constant that calls a function. Takes two parametersand uses arrow syntax. `()=> 3;` (A function in arrow syntax that takes no parameters and always returns 3.) Call this function after three seconds. Do you think he used the same example from the slides? Paste that example in.

# Node.js
Running JavaScript from the Console
```
➜  node -e “console.log(1+1)”
2
```
Running JavaScript file in Console
```
➜  node index.js
```
Running JavaScript in Console – Interpretive mode
```
➜  node
```
Welcome to Node.js v16.15.1.
```
> 1+1
2
> console.log(‘hello’)
hello
```

NPM knows how to access a massive repository of preexisting packages. You can search for packages on the [NPM website](https://www.npmjs.com/). However, before you start using NPM to install packages you need to initialize your code to use NPM. This is done by creating a directory that will contain your JavaScript and then running `npm init`. NPM will step you through a series of questions about the project you are creating. You can press the return key for each of questions if you want to accept the defaults. If you are always going to accept all of the defaults you can use `npm init -y` and skip the Q&A.

```sh
➜  mkdir npmtest
➜  cd npmtest
➜  npm init -y
```

# Final Study Guide
1. What ports are used for HTTP, HTTPS, SSH?
> HTTP: 80, HTTPS: 443, SSH: 22.

2. What do HTTP status codes in the 300, 400, 500 range indicate?
> 300: Redirection. These codes tell the client (like a web browser) that the requested resources is available elsewhere or has been moved, and the client should take additional action to complete the request.
> 400: Client errors. These codes are returned by the server whent he client's request has issues or is incorrect. Making it unable for the server to process the request.
> 500: Server errors. These codes are returned by the server when it encounters an issue or is unable to fulfill a valid request made by the client.

3. What does the HTTP header `content-type` allow you to do?
> Allows the server to specify the type of content being sent to the client in the HTTP response. It indicates the media type of resource being sent. How server makes sure that the client interprets the content correctly.
> Crucial because it helps the client understand how to properly interpret and display the content received from the server. Ex. For web browsers, the `content-type` header tells them howto render the content. For instance, HTML content will be rendered as a web page, while images will be displayed as images.
> Common `content-type` values: `text/html` for HTML docs, `application/json` for JSON data, `image/jpeg` for JPEG images, `application/pdf` for PDF docs, `text/plain` for plain text.

4. What do the following attributes of a cookie do?
> Domain
> Path
> SameSite
> HTTPOnly

5. Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?
```
// Sample middleware function
const sampleMiddleware = (req, res, next) => {
  // This middleware function logs the request method and URL path
  console.log(`Request Method: ${req.method}, URL Path: ${req.url}`);
  next(); // Calls the next middleware function in the chain
};

// Implementing middleware in an Express app
const express = require('express');
const app = express();

// Using the middleware for all routes
app.use(sampleMiddleware);

// Example route
app.get('/foo/bar', (req, res) => {
  res.send('Hello from /foo/bar!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
Output:
```
Request Method: GET, URL Path: /foo/bar
```

6. Given the following Express service code: What does the following JavaScript fetch return?
```
// userService.js - Example Express service code

// This is a simple in-memory database simulation
const users = [
  { id: 1, username: 'user1', email: 'user1@example.com' },
  { id: 2, username: 'user2', email: 'user2@example.com' },
  // ... other user data
];

// Service functions for user-related operations
const userService = {
  // Get all users
  getAllUsers: () => {
    return users;
  },

  // Get user by ID
  getUserById: (id) => {
    return users.find(user => user.id === id);
  },

  // Add a new user
  addUser: (user) => {
    users.push(user);
    return user;
  },

  // Update user details
  updateUser: (id, updatedUser) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
      return users[index];
    }
    return null; // User not found
  },

  // Delete a user by ID
  deleteUser: (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      const deletedUser = users.splice(index, 1);
      return deletedUser[0];
    }
    return null; // User not found
  }
};

module.exports = userService;
```
```
// Using fetch to make an HTTP GET request
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
  })
  .then(data => {
    // Work with the data received
    console.log(data); // Output the received data to the console
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch Error:', error);
  });
```
> Assuming the request to 'https://jsonplaceholder.typicode.com/posts' is successful and returns a valid JSON response, the code will log the received data (posts data in JSON format) to the console.

7. Given the following MongoDB query select all the matching documents: `{ cost: { $gt: 10 }, name: /fran.*/}`
> Interpretation: Cost field has a value greater than (`$gt`)`10`. Name field matches a regular expression (`/fran.*/`) where the name starts with "fran".
> Examples:
```
{
  "_id": 1,
  "name": "Frank",
  "cost": 15
}
```
```
{
  "_id": 2,
  "name": "Frances",
  "cost": 20
}
```

8. How should you store user passwords in a database?
> By hashing them.

9. Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?
```
// Client-side JavaScript (running in a web browser)
const socket = new WebSocket('ws://localhost:3000'); // Assuming WebSocket server runs on port 3000

// Event listener for when the WebSocket connection is opened
socket.addEventListener('open', (event) => {
  console.log('WebSocket connection opened');
});

// Event listener for incoming messages from the WebSocket server
socket.addEventListener('message', (event) => {
  console.log('Message from server:', event.data);
});

// Event listener for WebSocket connection errors
socket.addEventListener('error', (event) => {
  console.error('WebSocket connection error:', event);
});

// Event listener for WebSocket connection closures
socket.addEventListener('close', (event) => {
  console.log('WebSocket connection closed');
});

```

10. What is the WebSocket protocol used for?
> Real time communication. WebSocket is suitible for applications where immediate data transfer is essential: chat applications, online gaming, financial trading platforms, live streaming, collaborative tools, etc.

11. What is JSX and how are the curly braces rendered?
> An extention to JavaScript syntax used with React and other libraries. Allows developers to write HTML-like code directly within JavaScript, facilitating the creation of user interfaces.
> Cury braces in JSX are used to embed JavaScript expressions within JSX markup. They are used for dynamic content, enabling the evaluation of JavaScript expressions and variables inside JSX elements.

12. Assuming a HTML document with a `<div id="root"></div>` element, what content will the following React component generate?
```
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      function App() {
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
          </div>
        );
      }
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
```
> Three `h1` elements inside the `div` element with the ID `'root'`. Each `h1` element will contain a greeting message using the `Welcome` component.

13. Assuming a HTML document with a `<div id="root"></div>` element, what content will the following React component generate?
```
    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<Numbers/>);
```
> Generates an unordered list `<ul>` containing list items `<li>` based ont he `numbers`.

14. What does the following React component do?
```
function Example() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
> This React component "Example" demonstrates the usage of React's `useState` hook to manage state within a functional component.
> What does it do?
> State Initialization: Uses the `useState` hook to declare a state varaiable named `count` and its corresponding setter function `setCount`. The initial value of `count` is set to 0 by passing 0 as an argument to useState(0).
> Rendering: The component renders a `<div>` containing a `<p>` element displaying the current value of `count` using curly braces `{count}`. It also renders a button that says "Click me" and increases the count by 1.
> State update: When the button is clicked the count is increased.

15. What are React Hooks used for?
> React hooks are tools that enable functional components in React to manage state, handle side effects, access context, and more. They make it easier to use component-related features previously available only in class components, simplifying how logic and behavior are added to functional components.
> useState: Enables functional components to manage state.
> useEffect: Allows functional components to perform side effects (data fetching, subscriptions, or manually changing the DOM) after rendering. Replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and componentWillUnmount`.
16. What is the useEffect hook used for?
> useEffect in React lets you run code in functional components after they've rendered. It's perfect for doing things like fetching data, setting up subscriptions, or cleaning up after a component.

17. What does this code do?
```
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```
> Sets up the structure and routing for a React application using the React Router library.

18. What role does npm play in web development?
> NPM stands for Node Package Manager. It is used by developers to install and use code developed by others. NPM is like a big library.

19. What does package.json do in a npm project?
> package.json is like a project blueprint or map for a JavaScript project. It holds important information about the project including its dependencies, scripts, metadata, and configuration settings. It is the projects ID card and holds details about the project: what it's called, who made it, what other code needs work, and special commands to run it smoothly.

20. What does the fetch function do?
> The fetch function is used to get information from the web server or database.

21. What does node.js do?
> node.js allows JavaScript to work outside of the web browser on things like servers.

22. What does Vite do?
> Vite is used to build websites faster. It sets up the development environment for you.
