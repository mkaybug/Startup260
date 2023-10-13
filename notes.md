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
### Template Literals
*You can insert code that executes and returns right in your string!*
``Template ${'lite' + 'rals'}! ${hello(name)}`);`
Right click on webpage and click on "inspect"

### Syntax
== Comparison operator, are they equal?

=== Comparison operator, are they equal, AND are they the same type?
