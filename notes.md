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

> 
    
8. What does the following code using map with an array output?

>
    
9. What does the following code output using getElementByID and addEventListener?

> 
    
10. What does the following line of Javascript do using a # selector?

> 
    
11. Which of the following are true? (mark all that are true about the DOM)

> The Document Object Model is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.
> The browser provides access tot he DOM through a global variable name `document` that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name `document` you will see the DOM for the document the browser is currently rendering.
> For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.
> Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The DOM Element Interface provides the means for iterating child elements, accessing the parent element, and manipuating the element's attributes. From your JavaScript code, you can start with the `document` variable and walk through the every element in the tree.
> You can provide a CSS selector to the `querySelectorAll` function in order to select elements from the document. The `textContent` property contains all of the element's text. You can even access a textual representation of an element's HTML content witht he `innerHTML` property.
> Modifying the DOM -> The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.
> To delete elements call the `removeChild` function on the parent element.
> The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first div element in the DOM and replaces all the HTML it contains.
> However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, moniter activity, and steal credentials.
> Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using `innerHTML`.
> Event Listeners -> All DOM elements support the ability to attach a function that gets called when an event occurs on the element -> event listeners. 

12. By default, the HTML span element has a default CSS display property value of:

> DOM (Document Object Model) 
   
13. How would you use CSS to change all the div elements to have a background color of red?
   
14. How would you display an image with a hyperlink in HTML?
   
15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
   
16. Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
   
17. What will the following code output when executed using a for loop and console.log?
   
18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
   
19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
   
20. How do you declare the document type to be html?
   
21. What is valid javascript syntax for if, else, for, while, switch statements?
   
22. What is the correct syntax for creating a javascript object?
   
23. Is is possible to add new properties to javascript objects?
   
24. If you want to include JavaScript on an HTML page, which tag do you use?
   
25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
   
26. Which of the following correctly describes JSON?
   
27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
   
28. Which of the following console command creates a remote shell session?
   
29. Which of the following is true when the -la parameter is specified for the ls console command?
   
30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
  
> Browser talks to server. HTTPS ensures that we don't talk to the middle man who can steal   information. We talk to the server first because we want to know that the serve is legit, and then the server sends a certificate back. We can use that certificate to create an encryption key that can be used the rest of the session to secure data sent back and forth between browser and server.
   
31. Is a web certificate is necessary to use HTTPS.
   
32. Can a DNS A record can point to an IP address or another A record.
   
33. Port 443, 80, 22 is reserved for which protocol?
   
34. What will the following code using Promises output when executed?

> Constant that calls a function. Takes two parametersand uses arrow syntax. Call this function after three seconds. Do you think he used the same example from the slides? Paste that example in.
